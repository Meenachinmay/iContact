<template>

    <div>

        <!-- Nav bar  (header) -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">

            <a class="navbar-brand" ><h4 class="mx-2 my-2 text-white">iContact</h4></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item mx-3 mt-2">
                        <router-link class="nav-link"  to="/home"> <h5>Home</h5> </router-link>
                    </li>

                    <li class="nav-item mx-3 mt-2">
                        <router-link class="nav-link"  to="/about"> <h5>About</h5> </router-link>
                    </li>

                    <li class="nav-item mx-3 mt-2">
                        <a class="btn btn-sm btn-link text-white nav-link" data-toggle="modal" data-target="#meenachinmay"> <h5>Add New</h5> </a>
                    </li>

                </ul>

            </div>

        </nav>

        <!-- Add New Contact model form -->
        <AddContact/>

    </div>

</template>

<script>
    import AddContact from './AddContact'

    export default {
        components: {AddContact},
    }

</script>