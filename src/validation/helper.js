import "../assets/css/ldsspinner.css";
import * as _ from "lodash";
import jwt_decode from "jwt-decode";
// import Browsicosrc from "assets/img/landing/brows.svg";
// import Lashesicosrc from "assets/img/landing/lashes.svg";
// import Makeupicosrc from "assets/img/landing/makeup.svg";
// import Nailsicosrc from "assets/img/landing/nails.svg";
// import Hairicosrc from "assets/img/landing/scissors.svg";
// import Cosmeticsrc from "assets/img/landing/cosmetic.svg";
// import qs from "query-string";
import React from "react";
import { Modal } from "react-bootstrap";

// var primaryservices = require("../enums/primaryservices");

export const POST_IMAGES = "post_images";
export const AUTH_REDIRECT = "redirect";

// export const getSpecialtiesIcons = () => {
//   return [
//     {
//       label: primaryservices.hair,
//       src: Hairicosrc,
//       id: "58b0e151086f7d530875afdf",
//     },
//     {
//       label: primaryservices.brows,
//       src: Browsicosrc,
//       id: "59545b684adb0842fcd53813",
//     },
//     {
//       label: primaryservices.nails,
//       src: Nailsicosrc,
//       id: "58910a44e752c312a7ceb32f",
//     },
//     {
//       label: primaryservices.lashes,
//       src: Lashesicosrc,
//       id: "59545b914adb0842fcd53826",
//     },
//     {
//       label: primaryservices.makeup,
//       src: Makeupicosrc,
//       id: "59dbce5bd1c0fe7323505c84",
//     },
//     {
//       label: primaryservices.cosmetic,
//       src: Cosmeticsrc,
//       id: "5eebb11e23c8c579ec23cff0",
//     },
//   ];
// };

export const VisitSite = (site) => {
  if (isEmpty(site)) {
    return;
  } else {
    window.open(buildUrl(site), "_blank");
  }
};

export const goToUrl = (url) => {
  window.location.href = url;
};

export const buildUrl = (url) => {
  let newUrl = window.decodeURIComponent(url);
  newUrl = newUrl.trim().replace(/\s/g, "");
  if (!newUrl) return "";
  if (/^(:\/\/)/.test(newUrl)) {
    return `http${newUrl}`;
  }
  if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
    return `http://${newUrl}`;
  }
  return newUrl;
};

export function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// let IconicPages = ["discover", "profile"];
// let defaulttoplevelcategories = [
//   { id: "58b0e151086f7d530875afdf", name: "Hair" },
//   { id: "58910a44e752c312a7ceb32f", name: "Brows" },
//   { id: "59545b914adb0842fcd53826", name: "Lashes" },
//   { id: "59545b684adb0842fcd53813", name: "Nails" },
//   { id: "59dbce5bd1c0fe7323505c84", name: "Makeup" },
//   { id: "5eebb11e23c8c579ec23cff0", name: "Cosmetic" },
// ];

// let envybadges = ["ambassador", "elite", "stylist", "brand"];

/**
 * Get first chunk of page pathname
 * @todo: pages may have more than 1 chunk!
 * @return {string}
 */

export const isNumber = (text) => {
  if (text) {
    var reg = new RegExp("[0-9]+$");
    return reg.test(text);
  }
  return false;
};

export const removeSpecialChar = (text) => {
  if (text) {
    var lower = text.toLowerCase();
    var upper = text.toUpperCase();
    var result = "";
    for (var i = 0; i < lower.length; ++i) {
      if (
        isNumber(text[i]) ||
        lower[i] !== upper[i] ||
        lower[i].trim() === ""
      ) {
        result += text[i];
      }
    }
    return result;
  }
  return "";
};

export const formatUsPhone = (phone) => {
  var phoneTest = new RegExp(
    /^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/
  );
  phone = phone.trim();
  phone = removeSpecialChar(phone).replace(/ /g, "");
  var results = phoneTest.exec(phone);
  if (results !== null && results.length > 8) {
    var phoneno = results[4] + "-" + results[5];
    return (
      "(" +
      results[3] +
      ") " +
      phoneno +
      (typeof results[8] !== "undefined" ? " x" + results[8] : "")
    );
  } else {
    return phone;
  }
};

export const getCurrentPage = () => {
  const path = window.location.pathname;
  const pathObj = path.split("/");
  return _.get(pathObj, "1", "");
};

export const showHomeIcon = () => {
  return inArray(getCurrentPage(), IconicPages);
};

export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&"); // eslint-disable-line
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

/**
 * Check the current page
 * @param {string} page
 * @return {boolean}
 */
export const isPage = (page) => {
  return getCurrentPage() === page;
};

export function getCurrentProfile() {
  // let userToken = {};
  if (localStorage.getItem("authUser")) {
    let data = localStorage.getItem("authUser");
    let profile = JSON.parse(data);
    return !isEmpty(profile) ? profile : null;
  }
  return null;
}

export function getCurrentUser() {
  let userToken = {};
  if (localStorage.getItem("authToken")) {
    let data = localStorage.getItem("authToken");
    userToken = jwt_decode(data);
    return !isEmpty(userToken) ? userToken : null;
  }
  return null;
}

export function isOwner(userId) {
  let user = getCurrentUser();
  return user.userId === userId;
}
export function getCurrentUserId() {
  let user = getCurrentUser();
  return user && user.userId ? user.userId : null;
}

export const currentUserId = getCurrentUserId();

export function isEmpty(obj) {
  // empty
  if (!obj) {
    return true;
  }

  // exact boolean
  if (obj === true) {
    return false;
  }

  // array or string
  if (obj.length && obj.length > 0) {
    return false;
  }

  // not an object
  if (typeof obj !== "object") {
    return true;
  }

  // ?
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

export const LdsSpinner = () => (
  <div className="lds-css ng-scope">
    <div className="lds-spinner" style={{ width: "100%", height: "100%" }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export const LdsLoading = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <LdsSpinner />
    </div>
  );
};

export function getStoredSearch(itemname) {
  var stringified = localStorage.getItem(itemname);
  var object = {};
  if (stringified !== "" && stringified !== "[object Object]") {
    try {
      object = JSON.parse(stringified);
    } catch (error) {}
    return object;
  }
}

export function checkValue(value, arr) {
  var status = "Not exist";
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i];
    if (name === value) {
      status = "Exist";
      break;
    }
  }
  return status;
}

export function inArray(needle, haystack) {
  var length = haystack.length;
  for (var i = 0; i < length; i++) {
    if (haystack[i] === needle) return true;
  }
  return false;
}

export function Contains(MainArray, checkArray) {
  var found = false;
  for (var i = 0; i < checkArray.length; i++) {
    if (MainArray.indexOf(checkArray[i]) > -1) {
      found = true;
    } else {
      found = false;
    }
    return found;
  }
}

export function isCategorySelected(category, categories) {
  var exists = false;
  categories.every((item, i) => {
    if (category.id === item.id) {
      exists = true;
      return false;
    }
    return true;
  });
  return exists;
}

export function removeFromArray(array, element) {
  var index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

export function removeItem(array, index) {
  array.splice(index, 1);
  return array;
}

export function removeCategoryFromSelection(selection, category) {
  let filtered = selection.filter((item, i) => {
    return category.id !== item.id;
  });
  return filtered;
}

export function removeChildCategoryFromSelection(selection, category) {
  let filtered = selection;
  selection.forEach((c, i) => {
    if (category.id === c.parentId) {
      filtered = removeCategoryFromSelection(filtered, c);
      filtered = removeChildCategoryFromSelection(filtered, c);
    }
  });
  return filtered;
}

export function isTopLevelCategory(category, toplevelcategories = []) {
  toplevelcategories = toplevelcategories
    ? toplevelcategories
    : defaulttoplevelcategories;
  return isCategorySelected(category, toplevelcategories);
}

export function removeTopLevelCategories(categories, toplevelcategories = []) {
  toplevelcategories = toplevelcategories
    ? toplevelcategories
    : defaulttoplevelcategories;
  return categories.filter((item, i) => {
    return !inArray(item, toplevelcategories);
  });
}

export function modalLoader() {
  var showModal = true;
  return (
    <Modal centered show={showModal} className="loader-modal">
      <Modal.Body className="loader-modal-body">
        <center>
          <h5>Gathering your looks! Just a moment...</h5>
        </center>
        <center>
          <LdsSpinner />
        </center>
      </Modal.Body>
    </Modal>
  );
}

export const JustLoggedIn = ({ justAuthenticated }) => {
  if (!justAuthenticated) return "";
  return <div className="just-logged">You are logged in now!</div>;
};

export const FBLoader = ({ className = "" }) => {
  return (
    <div className={`loader-fb ${className}`}>
      <LdsSpinner />
    </div>
  );
};

export const Loader = ({ className = "" }) => {
  return (
    <div className={`d-loader ${className}`}>
      <LdsSpinner />
    </div>
  );
};
export const NotFound = ({ className = "", term = "" }) => {
  let css = isUndefined(className) ? "text-center pt-3" : className;
  return (
    <div className={`not-found ${css}`}>
      <p>{term} Not Found!</p>
    </div>
  );
};

export const isUndefined = (input) => {
  return typeof input === "undefined";
};

export const simplifyBadges = (profile) => {
  let badges = [];
  if (profile.badges && profile.badges.length) {
    profile.badges.forEach((b, i) => {
      badges.push(b.badge);
    });
  }
  return badges;
};

export const mapProfileForAccountType = (profile) => {
  let layout = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  }).layout;
  //only for debugging
  if (layout) {
    profile["is" + ucfirst(layout)] = true;
    return profile;
  }
  let badges = simplifyBadges(profile);
  if (!isEmpty(badges)) {
    envybadges.forEach((b, i) => {
      if (inArray(b, badges)) {
        profile["is" + ucfirst(b)] = true;
      }
    });
  } else {
    profile["isRegular"] = true;
  }
  return profile;
};

export const isRegular = (profile) => {
  return !isUndefined(profile.isRegular) && profile.isRegular;
};

export const isServiceProvider = (profile) => {
  return (
    isEmployed(profile) ||
    isIndependent(profile) ||
    findBadgeType(profile.badges, "STYLIST") ||
    findBadgeType(profile.badges, "UNCLAIMED") ||
    findBadgeType(profile.badges, "EMPLOYED SERVICE PROVIDER")
  );
};

export const isIndependent = (profile) => {
  return findBadgeType(profile.badges, "INDEPENDENT");
};

export const isEmployed = (profile) => {
  return findBadgeType(profile.badges, "EMPLOYED");
};

export const hasRandomUsername = (profile) => {
  if (isUndefined(profile.username)) return false; //legacy where is no username
  var p = /^\d+\.\d+@findyourenvy.com$/i;
  return p.test(profile.username);
};

export const hasRandomEmail = (profile) => {
  if (isUndefined(profile.email)) return false; //legacy where is no username
  var p = /^\d+\.\d+@findyourenvy.com$/i;
  return p.test(profile.email);
};

export const isUnclaimed = (profile) => {
  return (
    hasUnclaimedBadge(profile) ||
    hasRandomEmail(profile) ||
    hasRandomUsername(profile)
  );
};

export const hasUnclaimedBadge = (profile) => {
  return findBadgeType(profile.badges, "UNCLAIMED");
};

export const isStylist = (profile) => {
  return !isUndefined(profile.isStylist) && profile.isStylist;
  // return profile.isRegular;
};

export const isBusiness = (profile) => {
  return !isUndefined(profile.isBusiness) && profile.isBusiness;
};

export const isBrand = (profile) => {
  return !isUndefined(profile.isBrand) && profile.isBrand;
};

export const isAmbassador = (profile) => {
  return !isUndefined(profile.isAmbassador) && profile.isAmbassador;
};

export const findBadgeType = (badges, find) => {
  let found = false;
  if (isEmpty(badges)) return false;
  for (var x = 0; x < badges.length; x++) {
    if (badges[x].badge.toUpperCase() === find) {
      found = true;
      break;
    }
  }
  return found;
};

export const makeAddressFromPlace = (place) => {
  if (isUndefined(place.id) || isEmpty(place.id)) return "";
  return "";
};
export const blobToDataURL = (blob, callback) => {
  var a = new FileReader();
  a.onload = function (e) {
    callback(e.target.result);
  };
  a.readAsDataURL(blob);
};
export const dataURLtoBlob = (dataURI) => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);
  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  // create a view into the buffer
  var ia = new Uint8Array(ab);
  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], { type: mimeString });
  return blob;
};

//To select parent categories when a category is selected in a category tree.
//@param: category - integar id
//@param: selectedCategories - array of selected categories
//@param: allcategories - array of all available categories

export const selectParentCategories = (
  category,
  selectedCategories,
  allcategories
) => {
  allcategories.forEach((c, i) => {
    if (
      c.id === category.parentId &&
      c.parentId &&
      !isCategorySelected(c, selectedCategories)
    ) {
      selectedCategories.push(c);
      selectedCategories = selectParentCategories(
        c.id,
        selectedCategories,
        allcategories
      );
    }
  });
  return selectedCategories;
};

export function stringToArrayTrimmed(string) {
  if (string !== "") {
    return string.split(",").map((s) => s.trim());
  } else {
    return;
  }
}

export function deleteEmptyArrayElements(array) {
  if (!array) return [];
  return array.filter((s) => s !== "" || s === null);
}

export function getSpecialtyIcon(specialty) {
  let icons = getSpecialtiesIcons();
  let icon = icons.filter((v, i) => {
    return v.label === specialty;
  })[0];
  return icon;
}

export const ServiceIcons = ({ specialties, className }) => {
  if (!specialties) return null;
  let block = [];
  let specialtiesArray = stringToArrayTrimmed(specialties);
  if (specialtiesArray !== undefined) {
    if (specialtiesArray.length > 0) {
      for (var i in specialtiesArray) {
        var icon = getSpecialtyIcon(specialtiesArray[i]);
        if (icon) {
          block.push(
            <RenderServiceIcon
              key={"sico" + i}
              src={icon.src}
              className={className}
              label={icon.label}
            />
          );
        }
      }
    }
  }
  if (block.length > 0)
    return <div className="service-icons-wrap">{block}</div>;
  return null;
};

export const RenderServiceIcon = ({ src, label, className }) => {
  var ctmclass = "";
  //if(label == 'Hair'){ctmclass =  'scissors-rotate'; }else{ctmclass =  ' ';}
  return (
    <div className="service-icon">
      <img
        src={src}
        alt={label}
        title={label}
        className={"specialty-ico img-fluid " + ctmclass + " " + className}
      />
    </div>
  );
};

export function hasChild(category, selectedCategories) {
  for (var i in selectedCategories) {
    if (selectedCategories[i].parentId === category.id) return true;
  }
  return false;
}

export function collectBottomCategories(selectedCategories) {
  let bottomCategories = [];
  for (var i in selectedCategories) {
    if (!hasChild(selectedCategories[i], selectedCategories)) {
      bottomCategories.push(selectedCategories[i]);
    }
  }
  return bottomCategories;
}

export function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function enableElement(ele = "btnaddpostnext") {
  let btn = document.getElementById(ele);
  btn.removeAttribute("disabled");
}

export function disableElement(ele = "btnaddpostnext") {
  let btn = document.getElementById(ele);
  btn.setAttribute("disabled", "disabled");
}

export function getStylistNameById(stylists, userId) {
  if (!stylists || !userId) return;
  let name;
  stylists.forEach((u, i) => {
    if (!isUndefined(u.id) && u.id === userId) {
      name = u.name;
    }
  });
  return name;
}

export const ShowError = ({ error }) => {
  if (!error) return null;
  return [
    <div key="ec1" className="error col-md-12 text-center pt-2">
      {error}
    </div>,
  ];
};

export const userUrl = (user) => {
  var profileType = "";
  if (
    isRegular(user) ||
    isServiceProvider(user) ||
    isIndependent(user) ||
    isEmployed(user)
  ) {
    profileType = `/profile/`;
  } else {
    profileType = `/place/`;
  }
  return !isUndefined(user.username) && user.username
    ? "/" + user.username
    : profileType + user.id;
};

export const isValidEmail = (email) => {
  let reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; // eslint-disable-line
  return reg.test(email);
};

export const canEditPost = (post) => {
  return post.user.id && post.user.id === getCurrentUserId();
};

export const multiDimensionalUnique = (arr) => {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
};

export const removeFromMultidimensionalArray = (arr, removeArr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < removeArr.length; j++) {
      if (JSON.stringify(arr[i]) === JSON.stringify(removeArr[j])) {
        arr.splice(i, 1);
        break;
      }
    }
  }
  return arr;
};
