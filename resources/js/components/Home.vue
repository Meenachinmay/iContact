<template>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">

                <div class="card mb-3">
                    <div class="card-header">
                        <strong>Seach Contact</strong>
                        <input type="text" class="form-control w-100 mt-1">
                    </div>
                </div>

                <table class="table table-hover">
                    <thead class="thead-dark">

                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Actions</th>
                    </tr>

                    </thead>

                    <tbody v-for="item, key in list_data">

                    <tr>

                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone_number }}</td>

                        <td>
                            <button
                                    class="btn btn-sm btn-primary"
                                    data-toggle="modal"
                                    data-target="#updatecontact"
                                    v-on:click="send_single_data(key)">Edit
                            </button> |
                            <button class="btn btn-sm btn-danger" v-on:click="delete_this_contact(key)">Delete</button> |
                            <button
                                    class="btn btn-sm btn-success"
                                    data-toggle="modal"
                                    data-target="#showcontact"
                                    v-on:click="send_single_data(key)">View
                            </button>
                        </td>

                    </tr>

                    </tbody>

                </table>

                <ShowContact :data="single_list_data"/>
                <UpdateContact :data="single_list_data"/>

            </div> <!-- Col ended here! -->

        </div>

    </div>

</template>

<script>

    import ShowContact from './ShowContact.vue'
    import UpdateContact from './UpdateContact'

    export default {
        components: {ShowContact, UpdateContact},

        data(){
            return {
                list_data: {},
                single_list_data: {},
            }
        },

        created(){
            axios.post('/getContacts')
                .then((response) => {
                    this.list_data = response.data
                })
                .catch((error) => {

                })
        },

        methods: {

            send_single_data(key){
                this.single_list_data = this.list_data[key];
                window.eventBus.$emit('getData', this.single_list_data)
            },

            delete_this_contact(key){
                axios.delete('/deleteContact/' + this.list_data[key].id)
            },
        }
    }

</script>