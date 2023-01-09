<script>
export default {
  setup() {
    onMounted(() => {
      customerService.value.getCustomersLarge().then((data) => {
        customers.value = data;
        customers.value.forEach(
          (customer) => (customer.date = new Date(customer.date))
        );
        loading.value = false;
      });
    });
    const customers = ref();
    const selectedCustomers = ref();
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      "country.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    const customerService = ref(new CustomerService());
    const loading = ref(true);
    const representatives = [
      { name: "Amy Elsner", image: "amyelsner.png" },
      { name: "Anna Fali", image: "annafali.png" },
      { name: "Asiya Javayant", image: "asiyajavayant.png" },
      { name: "Bernardo Dominic", image: "bernardodominic.png" },
      { name: "Elwin Sharvill", image: "elwinsharvill.png" },
      { name: "Ioni Bowcher", image: "ionibowcher.png" },
      { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
      { name: "Onyama Limba", image: "onyamalimba.png" },
      { name: "Stephen Shaw", image: "stephenshaw.png" },
      { name: "XuXue Feng", image: "xuxuefeng.png" },
    ];
    const statuses = ref([
      "unqualified",
      "qualified",
      "new",
      "negotiation",
      "renewal",
      "proposal",
    ]);
    const formatDate = (value) => {
      return value.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };
    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    };
    return {
      customers,
      filters,
      loading,
      representatives,
      formatCurrency,
      selectedCustomers,
      formatDate,
      statuses,
    };
  },
};
</script>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import axios from "axios";

import { useLoginStore } from "@/stores/login";

import { api } from "@/global/api";
import type Invoice from "@/interfaces/Invoice";

import { FilterMatchMode, FilterOperator } from "primevue/api";
import EntryCard from "@/components/EntryCard.vue";
import ProgressSpinner from "primevue/progressspinner";

const userStore = useLoginStore();
console.log(`user store`, userStore);
console.log("api", api);
const invoices = ref([] as Invoice[]);
onMounted(() => {
  axios
    // .get("https://belingapi.imben.it/api/v1/invoices")
    .get(`${api.url}/invoices/`)
    .then((response) => {
      invoices.value = response.data.data.filter(
        (entry: { customer: string | undefined }) => {
          return entry.customer === userStore.user?.ssn;
        }
      );
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div>
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedCustomers"
      :globalFilterFields="[
        'name',
        'country.name',
        'representative.name',
        'status',
      ]"
      :loading="loading"
      :paginator="true"
      :rowHover="true"
      :rows="10"
      :rowsPerPageOptions="[10, 25, 50]"
      :value="customers"
      class="p-datatable-customers"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      dataKey="id"
      filterDisplay="menu"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex justify-content-center align-items-center">
          <h5 class="m-0">Customers</h5>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </template>
      <template #empty> No customers found.</template>
      <template #loading> Loading customers data. Please wait.</template>
      <Column headerStyle="width: 3rem" selectionMode="multiple"></Column>
      <Column field="name" header="Name" sortable style="min-width: 14rem">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Search by name"
            type="text"
          />
        </template>
      </Column>
      <Column
        field="country.name"
        filterMatchMode="contains"
        header="Country"
        sortable
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            style="vertical-align: middle"
            width="30"
          />
          <span class="image-text">{{ data.country.name }}</span>
        </template>
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Search by country"
            type="text"
          />
        </template>
      </Column>
      <Column
        :filterMenuStyle="{ width: '14rem' }"
        :showFilterMatchModes="false"
        filterField="representative"
        header="Agent"
        sortField="representative.name"
        sortable
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            style="vertical-align: middle"
            width="30"
          />
          <span class="image-text">{{ data.representative.name }}</span>
        </template>
        <template #filter="{ filterModel }">
          <div class="mb-3 font-bold">Agent Picker</div>
          <MultiSelect
            v-model="filterModel.value"
            :options="representatives"
            class="p-column-filter"
            optionLabel="name"
            placeholder="Any"
          >
            <template #option="slotProps">
              <div class="p-multiselect-representative-option">
                <img
                  src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                  style="vertical-align: middle"
                  width="30"
                />
                <span class="image-text">{{ slotProps.option.name }}</span>
              </div>
            </template>
          </MultiSelect>
        </template>
      </Column>
      <Column
        dataType="date"
        field="date"
        header="Date"
        sortable
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          {{ formatDate(data.date) }}
        </template>
        <template #filter="{ filterModel }">
          <Calendar
            v-model="filterModel.value"
            dateFormat="mm/dd/yy"
            placeholder="mm/dd/yyyy"
          />
        </template>
      </Column>
      <Column
        dataType="numeric"
        field="balance"
        header="Balance"
        sortable
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.balance) }}
        </template>
        <template #filter="{ filterModel }">
          <InputNumber
            v-model="filterModel.value"
            currency="USD"
            locale="en-US"
            mode="currency"
          />
        </template>
      </Column>
      <Column
        :filterMenuStyle="{ width: '14rem' }"
        field="status"
        header="Status"
        sortable
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          <span :class="'customer-badge status-' + data.status">{{
            data.status
          }}</span>
        </template>
        <template #filter="{ filterModel }">
          <Dropdown
            v-model="filterModel.value"
            :options="statuses"
            :showClear="true"
            class="p-column-filter"
            placeholder="Any"
          >
            <template #value="slotProps">
              <span :class="'customer-badge status-' + slotProps.value">{{
                slotProps.value
              }}</span>
            </template>
            <template #option="slotProps">
              <span :class="'customer-badge status-' + slotProps.option">{{
                slotProps.option
              }}</span>
            </template>
          </Dropdown>
        </template>
      </Column>
      <Column
        :showFilterMatchModes="false"
        field="activity"
        header="Activity"
        sortable
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          <ProgressBar :showValue="false" :value="data.activity" />
        </template>
        <template #filter="{ filterModel }">
          <Slider v-model="filterModel.value" class="m-3" range></Slider>
          <div class="flex align-items-center justify-content-between px-2">
            <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
            <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
          </div>
        </template>
      </Column>
      <Column
        bodyStyle="text-align: center; overflow: visible"
        headerStyle="width: 4rem; text-align: center"
      >
        <template #body>
          <Button icon="pi pi-cog" type="button"></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style lang="scss" scoped>
img {
  vertical-align: middle;
}

::v-deep(.p-paginator) {
  .p-paginator-current {
    margin-left: auto;
  }
}

::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #d8dadc;

  .p-progressbar-value {
    background-color: #607d8b;
  }
}

::v-deep(.p-datepicker) {
  min-width: 25rem;

  td {
    font-weight: 400;
  }
}

::v-deep(.p-datatable.p-datatable-customers) {
  .p-datatable-header {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
  }

  .p-paginator {
    padding: 1rem;
  }

  .p-datatable-thead > tr > th {
    text-align: left;
  }

  .p-datatable-tbody > tr > td {
    cursor: auto;
  }

  .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
  }
}
</style>
