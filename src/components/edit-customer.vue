<template>
  <div class="accordion" id="accordionExample">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="card-title my-2">
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >Basic Details</a>
        </h5>
      </div>
      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <table class="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{{customer.name}}</td>
                <td>Contact</td>
                <td>{{customer.contact}}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{{customer.dob}}</td>
                <td>DOA</td>
                <td>{{customer.doa}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h5 class="card-title my-2">
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseOne"
          >Preferences</a>
        </h5>
      </div>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <table class="table">
            <tbody>
              <tr>
                <td>Preferred Day</td>
                <td>{{customer.name}}</td>
                <td>Preferred Day</td>
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
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h5 class="card-title my-2">
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseOne"
          >Transaction History</a>
        </h5>
      </div>
      <div
        id="collapseThree"
        class="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <table class="table">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditCustomer",
  props: {
    customer: Object
  }
};
</script>
