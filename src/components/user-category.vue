<template>
  <div class="container-fluid p-0">
    <h4>
      <span class="badge badge-pill badge-primary">{{user}}</span>
    </h4>
    <div class="row">
      <div class="col-8 col-md-8">
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
                >Categories</a>
              </h5>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2 d-flex" v-for="(card,index) in categories" :key="index" style="height:120px;max-height:120px;">
                    <div class="card flex-fill">
                      <div
                        class="card-body my-2"
                        data-toggle="collapse" data-target="#collapseTwo"
                      >
                        <div class="row d-flex align-items-center mb-4">
                          <div class="col-9">
                            <h4
                              class="d-flex align-items-center mb-0 font-weight-light"
                            ><a @click="selectCategory(card)">{{card.name}}</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  aria-controls="collapseTwo"
                >Sub-Categories</a>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
               v-if="subCategories && subCategories.length!==0"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2 d-flex" v-for="(card,index) in subCategories" :key="index">
                    <div class="card flex-fill">
                      <div
                        class="card-body my-2"
                        data-toggle="collapse"
                        href="#multiCollapseExample1"
                      >
                        <div class="row d-flex align-items-center mb-4">
                          <div class="col-9">
                            <h4
                              class="d-flex align-items-center mb-0 font-weight-light"
                            >{{card.name}}</h4>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCategory",
  props: {
    user: String
  },
  data() {
    return {
      subCategories: [],
      selectedCategory:null,
      categories: [
        {
          name: "Care",
          subCategory: [
            {
              name: "Body Treatment"
            },
            {
              name: "Manicure"
            },
            {
              name: "Pedicure"
            }
          ]
        },
        {
          name: "Facial",
          subCategory: [
            {
              name: "All Time Favourite Facial"
            },
            {
              name: "Lotus"
            },
            {
              name: "Remy Laure"
            },
            {
              name: "Treatment Facials"
            }
          ]
        },
        {
          name: "Hair",
          subCategory: [
            {
              name: "Hair Color"
            },
            {
              name: "Hair Spa"
            },
            {
              name: "Hair Cut"
            },
            {
              name: "Hair Styling"
            },
            {
              name: "Hair Wash"
            },
            {
              name: "Highights"
            },
            {
              name: "Texture"
            },
            {
              name: "Treatment"
            }
          ]
        },
        {
          name: "Hair Removal",
          subCategory: [
            {
              name: "Wax (Honey Bee)"
            },
            {
              name: "Wax (Oil)"
            },
            {
              name: "Wax (Rica)"
            }
          ]
        },
        {
          name: "Make Up",
          subCategory: [
            {
              name: "Make Up"
            }
          ]
        },
        {
          name: "Male",
          subCategory: [
            {
              name: "Hair Color"
            },
            {
              name: "Hair Services"
            },
            {
              name: "Massage"
            },
            {
              name: "Treatment"
            }
          ]
        }
      ]
    };
  },
  methods: {
    selectCategory(card) {
      this.selectedCategory = card.name;
      this.subCategories = card.subCategory;
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
.card {
  background-color: #f8f8f8;
}
.card .card-body h2 {
  color: #505050;
}
.tab .nav-tabs .nav-link.active {
  background-color: #47bac1;
  color: white;
}
</style>
