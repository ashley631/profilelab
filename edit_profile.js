"use strict";

const editProfile = {
    template: `
    <form class="submit" ng-submit="$ctrl.edit($ctrl.newInfo)";>
        <h1>Edit Profile</h1>
            <label class="l1">Name</label>
            <input type="text" class="i1" ng-model="$ctrl.newInfo.name">
            <label class="l2">Contact</label>
            <input type="text" class="i2" ng-model="$ctrl.newInfo.contact">
            <label>Bio</label>
            <input type="text" class"=i3" ng-model="$ctrl.newInfo.bio">
        <button class=>Update</button>
    </form>
    `,

controller: ["ProfileServices", function(ProfileServices){
    const vm = this;
    vm.edit = (newInfo) => {
        ProfileServices.setUserProfile(newInfo);
    }

    }]
};



angular
.module("App")
.component("editProfile", editProfile)