<template>

    <div class="modal fade" id="meenachinmay" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">

            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Add New Contact</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <label for="name">Name</label>
                    <input type="text" class="form-control w-100" v-model="list.name" >
                    <label for="name">Email</label>
                    <input type="email" class="form-control w-100" v-model="list.email" >
                    <label for="name">Phone No</label>
                    <input type="text" class="form-control w-100" v-model="list.phone_number" >
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" v-on:click="addNewContact">Save contact</button>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    export default {
        data(){
            return{
                list: {
                  name: '',
                  email: '',
                  phone_number: '',
                },
            }
        },

        methods: {
            addNewContact(){

                axios.post('/contacts/addNew', this.$data.list)
                    .then((response) => {
                        console.log(response)
                        $('#meenachinmay').modal('hide')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }

</script>