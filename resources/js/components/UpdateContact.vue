<template>

    <div class="modal fade" id="updatecontact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">

            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Update details</h5>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>

                <div class="modal-body">

                    <label for="name"><strong>Name</strong></label>
                    <input type="text" class="form-control w-100 mb-2" v-model="list.name">

                    <label for="name"><strong>Email</strong></label>
                    <input type="email" class="form-control w-100 mb-2" v-model="list.email">

                    <label for="name"><strong>Phone No</strong></label>
                    <input type="text" class="form-control w-100 mb-2" v-model="list.phone_number">

                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" v-on:click="updateContactDetails">Update</button>

                </div>

            </div>
        </div>
    </div>

</template>

<script>

    export default {
        props: ['data'],

        data(){
            return{
                list: {},
            }
        },

        created(){
            window.eventBus.$on('getData', single_list_data => {
                this.list = single_list_data
            })
        },

        methods: {
            updateContactDetails(){
                axios.patch('/updateContact/' + this.data.id, this.$data.list)
                    .then((response) => {
                        console.log(response)
                        $('#updatecontact').modal('hide')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }

</script>