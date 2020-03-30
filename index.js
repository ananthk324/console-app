// Markups to be rendered

const appMarkup = `<div class="apps" style="padding: 2rem 2rem">
    <div class="app-btn-ctnr">
        <h3 style="display: inline">Apps</h3>
        <button type="button" class="btn btn-outline-primary" id="new-app-btn">New App <i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
        <div class="app-container">
        
        </div>
    </div>`;

const appInputMarkup = `<div class="card w-80">
    <div class="card-body">
    <div class="row">
        <div class="input-group col-md-4">
            <div class="input-group-prepend">
                <span class="input-group-text">App Name</span>
            </div>
            <input type="text" class="form-control" placeholder="Fasting App" id="appName" required>
        </div>
        <div class="input-group col-md-5">
            <div class="input-group-prepend">
                <span class="input-group-text">App Package Name</span>
            </div>
            <input type="text" class="form-control" placeholder="com.riafy.fasting" id="appPckName" required>
        </div>
        <div class="input-group col-md-3">    
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Categories</button>
                    <div class="dropdown-menu" multiple>
                        
                    </div>
            </div>
        </div>
    </div>

    <div>
        <button class="btn-primary btn-sm" id="appSubmit">Submit</button>
    </div>

    </div>
    </div>`

const catMarkup = `<div class="categories" style="padding: 2rem 2rem">
    <div class="cat-btn-ctnr">
        <h3 style="display: inline">Categories</h3>
        <button type="button" class="btn btn-outline-primary" id="new-cat-btn">New Category <i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
        <div class="category-container">
        
        </div>
    </div>`;

const catInputMarkup = `<div class="card w-80">
    <div class="card-body">
    <div class="row">
        <div class="input-group col-md-6">
            <div class="input-group-prepend">
                <span class="input-group-text">Name</span>
            </div>
            <input type="text" class="form-control" placeholder="Beginner" id="catName" required>
        </div>
        <div class="input-group col-md-6">    
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Packages</button>
                    <div class="dropdown-menu" multiple>
                        
                    </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="input-group col-md-6">
            <div class="input-group-prepend">
                <span class="input-group-text">Image URL</span>
            </div>
        <input type="text" class="form-control" placeholder="www.sample_url.com/image.jpg" id="catImgUrl" required>
        </div>
    </div>

    <div>
    <button class="btn-primary btn-sm" id="catSubmit">Submit</button>
    </div>

    </div>
    </div>`


const pckMarkup = `<div class="packages" style="padding: 2rem 2rem">
    <div class="pck-btn-ctnr">
        <h3 style="display: inline">Packages</h3>
        <button type="button" class="btn btn-outline-primary" id="new-pck-btn">New Package <i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
        <div class="package-container">

        </div>
    </div>`;

const pckInputMarkup = `<div class="card w-80">
<div class="card-body">
<div class="row">
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
        </div>
        <input type="text" class="form-control" placeholder="16-8 fasting dinner" id="pckName" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Skip</span>
        </div>
        <input type="text" class="form-control" placeholder="skip dinner" id="pckSkip" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Fasting Start</span>
        </div>
        <input type="number" class="form-control" placeholder="16" id="pckFastingStart" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Fasting End</span>
        </div>
        <input type="number" class="form-control" placeholder="8" id="pckFastingEnd" required>
    </div>
</div>

<div class="row">
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Type</span>
        </div>
        <input type="text" class="form-control" placeholder="hour" id="pckType" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Description</span>
        </div>
        <input type="text" class="form-control" placeholder="description" id="pckDesc" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Fasting Hours</span>
        </div>
        <input type="number" class="form-control" placeholder="16" id="pckFastingHrs" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Eating Hours</span>
        </div>
        <input type="number" class="form-control" placeholder="8" id="pckEatingHrs" required>
    </div>
</div>

<div class="row">
    <div class="input-group col-md-6">
        <div class="input-group-prepend">
            <span class="input-group-text">Image URL</span>
        </div>
        <input type="text" class="form-control" placeholder="https://www.example_url.com/image.jpg/" id="pckImgUrl" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Gradient 1</span>
        </div>
        <input type="text" class="form-control" placeholder="#fff" id="pckGradient1" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Gradient 2</span>
        </div>
        <input type="text" class="form-control" placeholder="#000" id="pckGradient2" required>
    </div>
</div>

<div>
    <button class="btn-primary btn-sm" id="pckSubmit">Submit</button>
</div>
</div>
</div>`;

// Loading animation markup

const loaderMarkup = `<div class="d-flex justify-content-center m-5">
<div class="spinner-grow text-info" role="status"></div>
<div class="spinner-grow text-info" role="status"></div>
<div class="spinner-grow text-info" role="status"></div>
</div>`;

// Function to insert loading animation markup in container

const addLoader = () => {
    elements.container.innerHTML = '';
    elements.container.insertAdjacentHTML('afterbegin', loaderMarkup);
}

// DOM elements

const elements = {
    container: document.querySelector('.container'),
    navApp: document.getElementById("nav-app"),
    navCat: document.getElementById("nav-cat"),
    navPck: document.getElementById("nav-pck"),
    homePg: document.getElementById("home-pg")
};

// API URL endpoints

let apiUrls = {
    getAllApp: "bundle",
    newApp: "bundle",
    delApp: "bundle",
    updateApp: "bundle",
    getAllCat: "category",
    newCat: "category",
    delCat: "category",
    updateCat: "category",
    getAllPck: "package",
    newPck: "package",
    delPck: "package",
    updatePck: "package"
}

// Initializing data storage arrays

let packageList = [],
    categoryList = [],
    appList = [];

/*

    View

    This section renders the markups and data on navigation button clicks

    render###Page() - renders the page for the section abbreviated as ###
*/

const renderAppPage = (container) => {

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', appMarkup);

    document.getElementById("new-app-btn").addEventListener('click', () => {

        document.querySelector('.app-container').innerHTML = '';
        document.querySelector('.app-container').insertAdjacentHTML('beforeend', appInputMarkup);

        catDrpDwnMenuRender();

        document.getElementById("appSubmit").addEventListener('click', getAppInput);
    });

}

// Renders the dropdown menu items

const catDrpDwnMenuRender = () => {

    if (categoryList.length > 0) {
        categoryList.forEach(cat => {

            const catDropdownMarkup = `
            <div class="dropdown-item"><input class="dropdown-items" type="checkbox" id="${cat.catId}">
            <label for="${cat.catId}">${cat.name}</label>
            </div>`;
            document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', catDropdownMarkup);

        });
    } else {
        const blankMarkup = `<div class="dropdown-item">No Categories</div>`;
        document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', blankMarkup);
    }

}

const renderCatPage = (container) => {

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', catMarkup);

    document.getElementById("new-cat-btn").addEventListener('click', () => {

        document.querySelector('.category-container').innerHTML = '';
        document.querySelector('.category-container').insertAdjacentHTML('beforeend', catInputMarkup);

        pckDrpDwnMenuRender();

        document.getElementById("catSubmit").addEventListener('click', getCategoryInput);
    });

}

const pckDrpDwnMenuRender = () => {

    if (packageList.length > 0) {
        packageList.forEach(pck => {

            const dropdownMarkup = `
            <div class="dropdown-item"><input class="dropdown-items" type="checkbox" id="${pck.pckId}">
            <label for="${pck.pckId}">${pck.name}</label>
            </div>`;
            document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', dropdownMarkup);

        });
    } else {
        const blankMarkup = `<div class="dropdown-item">No Packages</div>`;
        document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', blankMarkup);
    }

}

const renderPckPage = (container) => {

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', pckMarkup);

    document.getElementById("new-pck-btn").addEventListener('click', () => {

        document.querySelector('.package-container').innerHTML = '';
        document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckInputMarkup);
        document.getElementById("pckSubmit").addEventListener('click', getPackageInput);

    });

}

// Renders each card containing the data of the list

const renderPackages = (pckList) => {

    document.querySelector('.package-container').innerHTML = '';

    pckList.forEach(renderEachPck);

}

const renderEachPck = (pck) => {

    const pckDataMarkup = `<div class="card card-dis w-80">
    <div class="card-body">
        <p class="card-title"><b>Package Name: ${pck.name}</b></p>
        <p>Skip: ${pck.skip}, Type: ${pck.type}</p>
        <p>Fasting Start: ${pck.fasting_start}, Fasting End: ${pck.fasting_end}</p>
        <p>Fasting Hrs: ${pck.fasting_hrs}, Eating Hrs: ${pck.eating_hrs}</p>
        <p>Description: ${pck.description}</p>
        <p>Image URL: ${pck.img}</p>
        <p>Gradient 1: ${pck.gradient[0]}, Gradient 2: ${pck.gradient[1]}</p>
        <button type="button" class="btn btn-sm btn-outline-primary" onclick="editPackage(${pck.pckId})"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
        <button type="button" class="btn btn-sm btn-outline-danger" onclick="deletePackage(${pck.pckId})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
    </div>
    </div>`

    document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckDataMarkup);
}

//--------------------------------------------

const renderCategory = (catList) => {

    document.querySelector('.category-container').innerHTML = '';

    catList.forEach(renderEachCat);

}

const renderEachCat = (cat) => {

    let packageNames = [];

    for (let k = 0; k < cat.packages.length; k++) {
        let ID = parseInt(cat.packages[k], 10);
        packageList.forEach(pck => {
            if (pck.pckId === ID) {
                packageNames.push((" " + pck.name));
            }
        });
    }

    const catDataMarkup = `<div class="card card-dis w-80">
    <div class="card-body">
        <p class="card-title"><b>Category Name: ${cat.name}</b></p>
        <p>Image URL: ${cat.img}</p>
        <p>Packages Included: ${packageNames}</p>
        <button type="button" class="btn btn-sm btn-outline-primary" onclick="editCategory(${cat.catId})"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
        <button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteCategory(${cat.catId})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
    </div>
    </div>`

    document.querySelector('.category-container').insertAdjacentHTML('beforeend', catDataMarkup);
}

//---------------------------------------------

const renderApp = (appList) => {

    document.querySelector('.app-container').innerHTML = '';

    appList.forEach(renderEachApp);

}

const renderEachApp = (app) => {

    let categoryNames = [];

    for (let k = 0; k < app.categories.length; k++) {
        let ID = parseInt(app.categories[k], 10);
        categoryList.forEach(cat => {
            if (cat.catId === ID) {
                categoryNames.push((" " + cat.name));
            }
        });
    }

    const appDataMarkup = `<div class="card card-dis w-80">
    <div class="card-body">
        <p class="card-title"><b>App Name: ${app.name}</b></p>
        <p>App Package Name: ${app.appPckName}</p>
        <p>Categories Included: ${categoryNames}</p>
        <button type="button" class="btn btn-sm btn-outline-primary" onclick="editApp(${app.appId})"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
        <button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteApp(${app.appId})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
    </div>
    </div>`

    document.querySelector('.app-container').insertAdjacentHTML('beforeend', appDataMarkup);
}

/*

 Model

 */

// To create App List from data received from GET API call

const createAppList = (dataInput) => {

    const app = {
        appId: dataInput.id,
        name: dataInput.appName,
        appPckName: dataInput.appPackageName,
        categories: dataInput.categoryIDs.split(",")
    }

    appList.unshift(app);
}

// To create Category List from data received from GET API call

const createCategoryList = (dataInput) => {

    const category = {
        catId: dataInput.id,
        name: dataInput.categoryName,
        img: dataInput.categoryIMG,
        packages: dataInput.packageIDs.split(",")
    }

    categoryList.unshift(category);
}

// To create Package List from data received from GET API call

const createPackageList = (dataInput) => {

    let packageDetails = JSON.parse(dataInput.packageData);

    const package = {
        pckId: packageDetails.pckId,
        name: packageDetails.name,
        skip: packageDetails.skip,
        fasting_start: packageDetails.fasting_start,
        fasting_end: packageDetails.fasting_end,
        type: packageDetails.type,
        fasting_hrs: packageDetails.fasting_hrs,
        eating_hrs: packageDetails.eating_hrs,
        description: packageDetails.description,
        img: packageDetails.img,
        gradient: [packageDetails.gradient[0], packageDetails.gradient[1]]
    }

    packageList.unshift(package);
}

// Functions to receive user submitted input and then post it to server

const readDropDownVal = () => {

    let selected = new Array();
    let checks = document.getElementsByClassName("dropdown-items");
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            selected.push(checks[i].id);
        }
    }
    return selected;
}

const getAppInput = () => {

    let appInput = {
        appid: "",
        appname: document.getElementById("appName").value,
        apppackagename: document.getElementById("appPckName").value,
        category: readDropDownVal()
    };

    postData(apiUrls.newApp, "app", appInput);

}

const getCategoryInput = () => {

    let categoryInput = {
        catId: "",
        name: document.getElementById("catName").value,
        img: document.getElementById("catImgUrl").value,
        packages: readDropDownVal()
    };

    postData(apiUrls.newCat, "cat", categoryInput);

}

const getPackageInput = () => {

    let packageInput = {
        pckId: "",
        name: document.getElementById("pckName").value,
        skip: document.getElementById("pckSkip").value,
        fasting_start: document.getElementById("pckFastingStart").value,
        fasting_end: document.getElementById("pckFastingEnd").value,
        type: document.getElementById("pckType").value,
        fasting_hrs: document.getElementById("pckFastingHrs").value,
        eating_hrs: document.getElementById("pckEatingHrs").value,
        description: document.getElementById("pckDesc").value,
        img: document.getElementById("pckImgUrl").value,
        gradient: [document.getElementById("pckGradient1").value, document.getElementById("pckGradient2").value]
    };

    postData(apiUrls.newPck, "pck", packageInput);

}

// Delete functions, takes ID and updates the local list and calls API

const deleteApp = (id) => {

    let appID = id;

    if (confirm("Do you want to delete this?")) {

        deleteData(appID, apiUrls.delApp, false);

        appList = appList.filter(apps => apps.appId !== id);

        renderApp(appList);
    }

}

const deleteCategory = (id) => {

    let catID = id;

    if (confirm("Do you want to delete this? Deleting this category will also remove it from the apps it is added.")) {

        deleteData(catID, apiUrls.delCat, true);

        categoryList = categoryList.filter(categorys => categorys.catId !== id);

        renderCategory(categoryList);
    }

}

const deletePackage = (id) => {

    let packID = id;

    if (confirm("Do you want to delete this? Deleting this package will also remove it from categories it is added.")) {

        deleteData(packID, apiUrls.delPck, true);

        packageList = packageList.filter(packages => packages.pckId !== id);

        renderPackages(packageList);
    }

}

// Edit functions; receives ID and then put it to server.

const editApp = (id) => {

    let index;

    document.querySelector('.app-container').innerHTML = '';
    document.querySelector('.app-container').insertAdjacentHTML('beforeend', appInputMarkup);

    catDrpDwnMenuRender();

    for (let i = 0; i < appList.length; i++) {
        if (id === appList[i].appId) {
            index = i;
        }
    }

    let selCatIds = [];

    selCatIds = appList[index].categories.join();

    selCatIds = selCatIds.split(",");

    document.getElementById("appName").value = appList[index].name;
    document.getElementById("appPckName").value = appList[index].appPckName;

    for (let j = 0; j < selCatIds.length; j++) {
        document.getElementById(`${selCatIds[j]}`).checked = true;
    }

    document.getElementById("appSubmit").addEventListener('click', () => {

        appList[index].name = document.getElementById("appName").value;
        appList[index].appPckName = document.getElementById("appPckName").value;
        appList[index].categories = readDropDownVal();

        putData(appList[index], apiUrls.updateApp);
        renderApp(appList);
    });
}

const editCategory = (id) => {

    let index;

    document.querySelector('.category-container').innerHTML = '';
    document.querySelector('.category-container').insertAdjacentHTML('beforeend', catInputMarkup);

    pckDrpDwnMenuRender();

    for (let i = 0; i < categoryList.length; i++) {
        if (id === categoryList[i].catId) {
            index = i;
        }
    }

    let selPckIds = [];

    selPckIds = categoryList[index].packages.join();

    selPckIds = selPckIds.split(",");

    document.getElementById("catName").value = categoryList[index].name;
    document.getElementById("catImgUrl").value = categoryList[index].img;

    for (let j = 0; j < selPckIds.length; j++) {
        document.getElementById(`${selPckIds[j]}`).checked = true;
    }

    document.getElementById("catSubmit").addEventListener('click', () => {

        categoryList[index].name = document.getElementById("catName").value;
        categoryList[index].img = document.getElementById("catImgUrl").value;
        categoryList[index].packages = readDropDownVal();

        putData(categoryList[index], apiUrls.updateCat);
        renderCategory(categoryList);
    });
}

const editPackage = (id) => {

    let index;

    document.querySelector('.package-container').innerHTML = '';
    document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckInputMarkup);

    for (let i = 0; i < packageList.length; i++) {
        if (id === packageList[i].pckId) {
            index = i;
        }
    }

    document.getElementById("pckName").value = packageList[index].name;
    document.getElementById("pckSkip").value = packageList[index].skip;
    document.getElementById("pckFastingStart").value = packageList[index].fasting_start;
    document.getElementById("pckFastingEnd").value = packageList[index].fasting_end;
    document.getElementById("pckType").value = packageList[index].type;
    document.getElementById("pckFastingHrs").value = packageList[index].fasting_hrs;
    document.getElementById("pckEatingHrs").value = packageList[index].eating_hrs;
    document.getElementById("pckDesc").value = packageList[index].description;
    document.getElementById("pckImgUrl").value = packageList[index].img;
    document.getElementById("pckGradient1").value = packageList[index].gradient[0];
    document.getElementById("pckGradient2").value = packageList[index].gradient[1];

    document.getElementById("pckSubmit").addEventListener('click', () => {

        packageList[index].name = document.getElementById("pckName").value;
        packageList[index].skip = document.getElementById("pckSkip").value;
        packageList[index].fasting_start = document.getElementById("pckFastingStart").value;
        packageList[index].fasting_end = document.getElementById("pckFastingEnd").value;
        packageList[index].type = document.getElementById("pckType").value;
        packageList[index].fasting_hrs = document.getElementById("pckFastingHrs").value;
        packageList[index].eating_hrs = document.getElementById("pckEatingHrs").value;
        packageList[index].description = document.getElementById("pckDesc").value;
        packageList[index].img = document.getElementById("pckImgUrl").value;
        packageList[index].gradient[0] = document.getElementById("pckGradient1").value;
        packageList[index].gradient[1] = document.getElementById("pckGradient2").value;

        putData(packageList[index], apiUrls.updatePck);
        renderPackages(packageList);
    });
}


// -------------------------------
// Use this cors proxy URL if required.

let corsProxy = 'https://cors-anywhere.herokuapp.com/';

// API URL

let appUrl = 'https://morning-hamlet-41477.herokuapp.com';

// URL to redirect to login page
let redirectUrl = 'https://morning-hamlet-41477.herokuapp.com/client/logout.php';

// Read token value
let token = document.getElementById("accesstoken").value;

const invalidResponse = (disAlert = true) => {
    token = null;
    if (disAlert) {
        alert("Session timeout or invalid token. Please Login again.");
    }
    window.location.replace(redirectUrl);
}

// Defining the HTTP request for GET method

const getMethod = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'token': token
    },
}

// GET API call

async function getData(endpoint, dataType, render = false, disAlert = true) {
    try {
        let response = await fetch(`${appUrl}/${endpoint}`, getMethod);
        let data = await response.json();
        let httpStatus = response.status;

        if (httpStatus !== 401) {

            console.log(data);

            if (dataType === "pck") {
                packageList = [];
                data.forEach(createPackageList);
                console.log(packageList);

                elements.container.innerHTML = '';
                renderPckPage(elements.container);
                renderPackages(packageList);
            } else if (dataType === "cat") {
                categoryList = [];
                data.forEach(createCategoryList);
                console.log(categoryList);

                if (render) {
                    elements.container.innerHTML = '';
                    renderCatPage(elements.container);
                    renderCategory(categoryList);
                }
            } else {
                appList = [];
                data.forEach(createAppList);
                console.log(appList);

                if (render) {
                    elements.container.innerHTML = '';
                    renderAppPage(elements.container);
                    renderApp(appList);
                }
            }
        } else {
            invalidResponse(disAlert);
        }
    } catch (err) {
        alert("Failed to retrieve data from server :(");
        console.log(err);
    }
}

// POST API Call

const postData = (endpoint, dataType, content) => {

    const postMethod = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token
        },
        body: JSON.stringify(content)
    }

    addLoader();
    console.log(postMethod);

    fetch(`${appUrl}/${endpoint}`, postMethod)
        .then(response => response.json())
        .then(() => {
            if (response.status === 401) {
                invalidResponse();
            }
        })
        .then(data => {
            console.log(data);
            if (dataType === "pck") {
                getData(apiUrls.getAllPck, "pck", false);
            } else if (dataType === "cat") {
                getData(apiUrls.getAllCat, "cat", true);
            } else {
                getData(apiUrls.getAllApp, "app", true);
            }
        }).catch(err => console.log(err));
}

//  PUT API Call

const putData = (content, endpoint) => {
    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token
        },
        body: JSON.stringify(content)
    }

    console.log(putMethod);

    fetch(`${appUrl}/${endpoint}`, putMethod)
        .then(response => response.json())
        .then(() => {
            if (response.status === 401) {
                invalidResponse();
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// DELETE API Call

const deleteData = (id, endpoint, load = false) => {

    const deleteMethod = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token
        },
    }

    console.log(deleteMethod);

    fetch(`${appUrl}/${endpoint}/${id}`, deleteMethod)
        .then(response => response.json())
        .then(() => {
            if (response.status === 401) {
                invalidResponse();
            }
        })
        .then(data => {
            console.log(data);
            if (load) {
                getData(apiUrls.getAllCat, "cat", false)
                    .then(getData(apiUrls.getAllApp, "app", false));
            }
        })
        .catch(err => console.log(err));
}

// Function to initialize, and read Data from server

const init = () => {

    addLoader();

    getData(apiUrls.getAllPck, "pck", false, true);
    getData(apiUrls.getAllCat, "cat", false, false);
    getData(apiUrls.getAllApp, "app", false, false);
}

init();

// Event listeners for navigation

elements.navPck.addEventListener('click', function() {

    renderPckPage(elements.container);
    renderPackages(packageList);

});

elements.navCat.addEventListener('click', function() {

    renderCatPage(elements.container);
    renderCategory(categoryList);

});

elements.navApp.addEventListener('click', function() {

    renderAppPage(elements.container);
    renderApp(appList);

});

elements.homePg.addEventListener('click', function() {

    renderPckPage(elements.container);
    renderPackages(packageList);

});