"use strict";

function ProfileServices ($location) {
    const self = this;
    self.userProfile = {
        name: "Sadie The Doberman",
        contact: "sadiethedoberman@gmail.com",
        bio: "I enjoy long walks to the dog park and running on beaches. I destroy all my toys for fun. I wish my mom would come back home from Michigan now."
    }
    self.getUserProfile = () => {
         return self.userProfile;
       
    }
    self.setUserProfile = (newInfo) => {
        console.log(newInfo);
        self.userProfile = angular.copy(newInfo);
        $location.path("/user_profile");
    }


};

angular
.module ("App")
.service("ProfileServices", ProfileServices)