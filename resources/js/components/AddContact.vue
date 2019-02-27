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
                    <input type="text" class="form-control w-100" v-model="list.name" required>
                    <label for="name">Email</label>
                    <input type="email" class="form-control w-100" v-model="list.email" required>
                    <label for="name">Phone No</label>
                    <input type="text" class="form-control w-100" v-model="list.phone_number" required>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" v-on:click="addNewContact" data-dismiss="modal">Save contact</button>
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
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                this.$data.list = ''
            }
        }
    }

</script>