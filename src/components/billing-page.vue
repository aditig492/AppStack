<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-md-10">
        <div class="form-group mb-3">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search Customer by name/ contact no."
              list="selections"
              name="selection"
              v-on:input="selectCustomer($event)"
            >
            <datalist id="selections">
              <option v-for="(item,index) in existingCustomers" :key="index" :value="item.name"></option>
            </datalist>
            <span class="input-group-append">
              <button class="btn btn-primary" type="button" @click="openCustomerModal">
                <i class="fas fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#sizedModalLg"
          @click="addCard()"
        >Add</button>

        <div class="modal fade" id="sizedModalLg" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add New Customer</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body m-3">
                <form>
                  <fieldset class="form-group">
                    <div class="row">
                      <label class="col-form-label col-sm-2">Title</label>
                      <label class="custom-control custom-radio">
                        <input
                          name="custom-radio-3"
                          type="radio"
                          class="custom-control-input"
                          v-model="customer.title"
                        >
                        <span class="custom-control-label">Mr.</span>
                      </label>
                      <label class="custom-control custom-radio">
                        <input
                          name="custom-radio-3"
                          type="radio"
                          v-model="customer.title"
                          class="custom-control-input"
                        >
                        <span class="custom-control-label">Ms.</span>
                      </label>
                    </div>
                  </fieldset>
                  <div class="form-group">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="customer.name"
                      placeholder="Enter Name"
                    >
                  </div>
                  <div class="form-group">
                    <label class="form-label">Mobile</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="customer.contact"
                      placeholder="Enter Mobile"
                    >
                  </div>
                  <div class="form-group">
                    <label class="form-label w-100">Date of birth</label>
                    <input type="date" class="form-control" v-model="customer.dob">
                  </div>
                  <div class="form-group">
                    <label class="form-label w-100">DOA</label>
                    <input type="date" class="form-control" v-model="customer.doa">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  @click="addCustomer"
                >Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <!-- END  modal -->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3 d-flex" v-for="(card,index) in customers" :key="index">
        <div class="card flex-fill">
          <div class="card-body my-2">
            <div class="row d-flex align-items-center mb-4">
              <div class="col-9">
                <h2
                  class="d-flex align-items-center mb-0 font-weight-light"
                >{{card.title}} {{card.name}}</h2>
                <h6 class="d-flex align-items-center mb-0 font-weight-light">{{card.contact}}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="selectCategory(card)"
                >Start Billing</button>
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-toggle="modal"
                  data-target="#sizedModalLg1"
                  @click="viewCustomerDetails(card)"
                >View Customer</button>
                <div
                  class="modal fade"
                  id="sizedModalLg1"
                  tabindex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <div class="col-md-10">
                          <h4 class="modal-title">Customer Details</h4>
                        </div>
                        <div class="col-md-2">
                          <button class="btn btn-primary" type="button" @click="editMode=!editMode">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
                      <div class="modal-body m-3">
                        <customer-details
                          :customer="customer"
                          :editMode="editMode"
                          @updateCustomerDetails="updateCustomer"
                        ></customer-details>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        <button
                          v-if="editMode"
                          type="button"
                          class="btn btn-primary"
                          data-dismiss="modal"
                          @click="editCustomerDetails"
                        >Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerDetails from "./customer-details.vue";
export default {
  name: "BillingPage",
  components: {
    CustomerDetails
  },
  data() {
    return {
      editMode: false,
      selectedCustomer: "",
      existingCustomers: [
        {
          name: "Aditi Gupta",
          title: "Ms",
          contact: 9013896638,
          dob: "15-09-1998",
          doa: "20-07-2018"
        },
        {
          name: "Shelly Singh",
          title: "Ms",
          contact: 9013896638,
          dob: "15-09-1998",
          doa: "20-07-2018"
        },
        {
          name: "Mary Jane",
          title: "Ms",
          contact: 9013896638,
          dob: "15-09-1998",
          doa: "20-07-2018"
        }
      ],
      customers: [],
      customer: {
        name: "",
        title: "",
        contact: 99999999,
        dob: "",
        doa: ""
      }
    };
  },
  methods: {
    addCard() {
      this.customer = {
        name: "",
        title: "",
        contact: 99999999,
        dob: "",
        doa: ""
      };
    },
    addCustomer() {
      this.customers.push(this.customer);
    },
    selectCategory(card) {
      this.$router.push({ name: "Category", params: { user: card.name } });
    },
    viewCustomerDetails(customer) {
      this.customer = customer;
    },
    updateCustomer(e) {
      console.log(e);
    },
    editCustomerDetails() {
      // call on api
      console.log(this.customers);
    },
    selectCustomer(e) {
      this.selectedCustomer = e.currentTarget.value;
    },
    openCustomerModal() {
      let customer = this.existingCustomers.find(
        value => value.name === this.selectedCustomer
      );
      this.customers.push(customer);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#accordianExample .card .card-header {
  background: #42b983;
}
</style>
