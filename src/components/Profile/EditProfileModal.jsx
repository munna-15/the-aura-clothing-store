import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const EditProfileModal = ({ isOpen, onClose }) => {
  const { user, updateProfile } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const success = updateProfile(formData);

  if (success) {
    onClose();
  }
};
  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm"
        >

          <motion.div
            initial={{ opacity: 0, scale: .94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .94, y: 30 }}
            transition={{ duration: .3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-4xl border border-white/40 bg-white/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,.18)] backdrop-blur-3xl"
          >

            {/* Header */}

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-400">
                  Account
                </p>

                <h2 className="mt-2 text-3xl font-semibold">
                  Edit Profile
                </h2>

              </div>

              <button
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 transition hover:bg-black hover:text-white"
              >
                <X size={18} />
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="h-13 w-full rounded-2xl border border-neutral-200 bg-white px-5 outline-none transition focus:border-black"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="h-13 w-full rounded-2xl border border-neutral-200 bg-white px-5 outline-none transition focus:border-black"
              />

              <textarea
                rows={4}
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full resize-none rounded-2xl border border-neutral-200 bg-white p-5 outline-none transition focus:border-black"
              />

              <div className="flex justify-end gap-3 pt-2">

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-neutral-300 px-7 py-3 transition hover:border-black"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-full bg-black px-8 py-3 text-white transition hover:bg-neutral-800"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default EditProfileModal;