<template>
  <div class="accordion" id="accordionExample">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h6 class="card-title my-2">
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapseOne"
          >Basic Details</a>
        </h6>
      </div>
      <div
        id="collapse1"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <table class="table" v-if="!editMode">
            <tbody>
              <tr>
                <td>Contact</td>
                <td>{{customer.contact}}</td>
                <td>Name</td>
                <td>{{customer.name}}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{{customer.dob}}</td>
                <td>DOA</td>
                <td>{{customer.doa}}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="editMode">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Contact</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="customer.contact"
                    id="inputEmail4"
                    placeholder="Contact"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Name"
                    v-model="customer.name"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">DOB</label>
                  <input
                    type="date"
                    class="form-control"
                    id="inputEmail4"
                    v-model="customer.dob"
                    placeholder="DOB"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">DOA</label>
                  <input
                    type="date"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="DOA"
                    v-model="customer.doa"
                  >
                </div>
              </div>
              <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapse2"
                aria-expanded="true"
                aria-controls="collapseOne"
                style="float-right"
                @click="goToNextStep()"
              >
                <i class="fas fa-check"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h6 class="card-title my-2">
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapse2"
            aria-expanded="true"
            aria-controls="collapseOne"
          >Preferences</a>
        </h6>
      </div>
      <div
        id="collapse2"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <table class="table" v-if="!editMode">
            <tbody>
              <tr>
                <td>Preferred Day</td>
                <td>{{customer.name}}</td>
                <td>Preferred Time</td>
                <td>{{customer.contact}}</td>
              </tr>
              <tr>
                <td>Preferred Service</td>
                <td>{{customer.dob}}</td>
                <td>Avg Feedback Rating</td>
                <td>{{customer.doa}}</td>
              </tr>
              <tr>
                <td>Recommended Service</td>
                <td>{{customer.dob}}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="editMode">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Preferred Day</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="customer.contact"
                    id="inputEmail4"
                    placeholder="Preferred Day"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Preferred Time</label>
                  <input
                    type="time"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Preferred Time"
                    v-model="customer.name"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Preferred Service</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    v-model="customer.dob"
                    placeholder="Preferred Service"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Avg Feedback Rating</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Avg Feedback Rating"
                    v-model="customer.doa"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Recommended Service</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    v-model="customer.dob"
                    placeholder="Recommended Service"
                  >
                </div>
              </div>
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target="#collapse3"
                aria-expanded="true"
                aria-controls="collapseOne"
                type="button"
                style="float-right"
                @click="goToNextStep()"
              >
                <i class="fas fa-check"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h6 class="card-title my-2">
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapse3"
            aria-expanded="true"
            aria-controls="collapseOne"
          >Transaction History</a>
        </h6>
      </div>
      <div
        id="collapse3"
        class="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <table class="table" v-if="!editMode">
            <tbody>
              <tr>
                <td>Trasaction 1</td>
                <td>{{customer.name}}</td>
                <td>Transaction 2</td>
                <td>{{customer.contact}}</td>
              </tr>
              <tr>
                <td>Transaction 3</td>
                <td>{{customer.dob}}</td>
                <td>Transaction 4</td>
                <td>{{customer.doa}}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="editMode">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Transaction 1</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="customer.contact"
                    id="inputEmail4"
                    placeholder="Preferred Day"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Transaction 2</label>
                  <input
                    type="time"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Preferred Time"
                    v-model="customer.name"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Transaction 3</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    v-model="customer.dob"
                    placeholder="Preferred Service"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Tra </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Avg Feedback Rating"
                    v-model="customer.doa"
                  >
                </div>
              </div>
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target="#collapse3"
                aria-expanded="true"
                aria-controls="collapseOne"
                type="button"
                style="float-right"
                @click="goToNextStep()"
              >
                <i class="fas fa-check"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerDetails",
  props: {
    customer: Object,
    editMode: Boolean
  },
  methods: {
    goToNextStep() {
      this.$emit("updateCustomerDetails", this.customer);
    }
  }
};
</script>
