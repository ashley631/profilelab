"use strict";

const userProfile= {
    template: `
    <section class ="img">
    
        <section class="blue">
        <img src="IMG_6449.JPG">
            <h1 class ="info">{{ $ctrl.info.name }} </h1>
            <p class="email"> {{ $ctrl.info.contact }} </p>
            <p class="bio"> {{ $ctrl.info.bio }} </p>
            <a href="#!/edit_profile" class="edit">Edit</a>
        </section>
    </section>
    
    `, 

    controller : ["ProfileServices", function(ProfileServices){
        const vm = this;
        vm.info = ProfileServices.getUserProfile();


    }] 
}


angular
.module("App")
.component("userProfile",userProfile)