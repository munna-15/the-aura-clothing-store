import { useState } from "react";

import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileStats from "../components/Profile/ProfileStars";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileActions from "../components/Profile/ProfileActions";
import EditProfileModal from "../components/Profile/EditProfileModal";

const Profile = () => {

  const [isEditOpen, setIsEditOpen] = useState(false);

  return (

    <>
      <main className="min-h-screen bg-neutral-50">

        <section className="mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-10 lg:pb-20">

          {/* Header */}

          <ProfileHeader
            onEditProfile={() => setIsEditOpen(true)}
          />

          {/* Stats */}

          <div className="mt-6 sm:mt-8">
            <ProfileStats />
          </div>

          {/* Main Layout */}

          <section
            className="
            mt-6
            grid
            gap-6
            lg:mt-8
            lg:grid-cols-[minmax(0,1fr)_320px]
            xl:grid-cols-[minmax(0,1fr)_340px]
            xl:gap-8
            "
          >

            <div className="min-w-0">
              <ProfileInfo />
            </div>

            <aside className="min-w-0">

              <ProfileActions
                onEditProfile={() => setIsEditOpen(true)}
              />

            </aside>

          </section>

          {/* Future Components */}

          {/* <RecentOrders /> */}

          {/* <WishlistPreview /> */}

          {/* <RecentlyViewed /> */}

        </section>

      </main>

      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />

    </>
  );

};

export default Profile;