import nuxtStorage from "nuxt-storage";
export default function({ store, redirect }) {
  console.log("Auth Middleware");

  // If the user is not authenticated
  if (!nuxtStorage.localStorage.getData("username")) {
    return redirect("/login");
  }
}
