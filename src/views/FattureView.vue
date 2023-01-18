<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

import { useLoginStore } from "@/stores/login";

import { api } from "@/global/api";
import type Invoice from "@/interfaces/Invoice";
import { FilterMatchMode, FilterOperator } from "primevue/api";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import InputNumber from "primevue/inputnumber";

const userStore = useLoginStore();
const invoices = ref<Invoice[]>();
const selectedInvoices = ref<Invoice[]>();
console.log(`user store`, userStore);

onMounted(() => {
  axios
    .get(`${api.url}/invoices/`)
    .then((response) => {
      invoices.value = response.data.data.filter(
        (entry: { customer: string | undefined }) => {
          return entry.customer === userStore.user?.ssn;
        }
      );
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
    });
});
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  emission: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
  },
  expiry: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
  },
  amount: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  status: {
    operator: FilterOperator.OR,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
});
const loading = ref(true);
const statuses = ref(["paid", "new", "expired"]);
const getStatus = (data: Invoice) => {
  if (data.paid) {
    return statuses.value[0];
  } else if (data.expiry < new Date()) {
    return "new";
  } else {
    return statuses.value[2];
  }
};

const account_map = {
  1: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
};

const formatDate = (value: Date) => {
  try {
    return value.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch (e) {
    console.log(e);
    return value;
  }
};
const formatCurrency = (value: number) => {
  return value.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
  });
};
</script>

<template>
  <div>
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedInvoices"
      :globalFilterFields="['id', 'emission', 'expiry', 'amount', 'status']"
      :loading="loading"
      :paginator="true"
      :rowHover="true"
      :rows="10"
      :rowsPerPageOptions="[10, 25, 50]"
      :value="invoices"
      class="p-datatable-invoices"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      dataKey="id"
      filterDisplay="menu"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex justify-content-center align-items-center">
          <h5 class="m-0">Invoices</h5>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </template>
      <template #empty> No invoices found.</template>
      <template #loading> Loading invoice data. Please wait.</template>
      <Column headerStyle="width: 3rem" selectionMode="multiple"></Column>
      <Column data-type="number" field="id" header="Id" :sortable="true">
        <template #body="{ data }">
          {{ data.id }}
        </template>
        <template #filter="{ filterModel }">
          <InputText
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Search by id"
            type="number"
          />
        </template>
      </Column>
      <Column
        field="account"
        filterMatchMode="contains"
        header="Account"
        :sortable="false"
      >
        <template #body="{}">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
            style="vertical-align: middle"
            width="30"
            alt="account"
          />
        </template>
      </Column>
      <Column
        dataType="date"
        field="emission"
        header="Emission"
        :sortable="true"
      >
        <template #body="{ data }">
          {{ formatDate(data.emission) }}
        </template>
        <template #filter="{ filterModel }">
          <Calendar
            v-model="filterModel.value"
            dateFormat="dd/mm/yy"
            placeholder="dd/mm/yyyy"
          />
        </template>
      </Column>
      <Column
        dataType="numeric"
        field="amount"
        header="Amount"
        :sortable="true"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.amount) }}
        </template>
        <template #filter="{ filterModel }">
          <InputNumber
            v-model="filterModel.value"
            currency="EUR"
            locale="it-IT"
            mode="currency"
          />
        </template>
      </Column>
      <Column
        :filterMenuStyle="{ width: '14rem' }"
        field="status"
        header="Status"
        :sortable="true"
      >
        <template #body="{ data }">
          <span :class="'customer-badge status-' + getStatus(data)">{{
            getStatus(data)
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
      <Column dataType="date" field="expiry" header="Expiry" :sortable="true">
        <template #body="{ data }">
          {{ formatDate(data.expiry) }}
        </template>
        <template #filter="{ filterModel }">
          <Calendar
            v-model="filterModel.value"
            dateFormat="dd/mm/yy"
            placeholder="dd/mm/yyyy"
          />
        </template>
      </Column>
      <Column
        v-if="userStore.user?.ssn === 'RGIMML02P14Z129I'"
        bodyStyle="text-align: center; overflow: visible"
        headerStyle="width: 4rem; text-align: center"
        :sortable="false"
      >
        <template #body>
          <Button icon="pi pi-cog" style="color: white" type="button"></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style lang="scss" scoped>
img {
  vertical-align: middle;
}
.status-paid {
  background-color: #1d6c20;
}

.status-new {
  background-color: #d6b500;
}

.status-expired {
  background-color: #d50000;
}

::v-deep(.p-paginator) {
  .p-paginator-current {
    margin-left: auto;
  }
}

::v-deep(.p-datepicker) {
  min-width: 25rem;

  td {
    font-weight: 400;
  }
}

::v-deep(.p-datatable.p-datatable-invoices) {
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
    margin: 0.2rem;
  }

  .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
  }
}
</style>
