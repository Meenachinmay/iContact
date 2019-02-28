<template>

    <div class="modal fade" id="showcontact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">

            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Contact details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">

                    <label for="name">Name</label>
                    <p class="form-control">{{ this.data.name }}</p>
                    <label for="name">Email</label>
                    <p class="form-control">{{ this.data.email }}</p>
                    <label for="name">Phone No</label>
                    <p class="form-control">{{ this.data.phone_number }}</p>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    export default {
        props: ['data'],

        data(){
            return {

            }
        },
    }

</script>