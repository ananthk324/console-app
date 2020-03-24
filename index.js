// Markups

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
                <span class="input-group-text">Image URL</span>
            </div>
            <input type="text" class="form-control" placeholder="www.sample_url.com/image.jpg" id="catImgUrl" required>
        </div>
    </div>

    <div class="row">
        <div class="input-group col-md-6">    
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Packages</button>
                    <div class="dropdown-menu" multiple>
                        
                    </div>
            </div>
        </div>

        <div class="input-group col-md-6">    
            <div>
                <button class="btn-primary btn-sm" id="catSubmit">Submit</button>
            </div>
        </div>
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
            <span class="input-group-text">Gradient #1</span>
        </div>
        <input type="text" class="form-control" placeholder="#fff" id="pckGradient1" required>
    </div>
    <div class="input-group col-md-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Gradient #2</span>
        </div>
        <input type="text" class="form-control" placeholder="#000" id="pckGradient2" required>
    </div>
</div>

<div>
    <button class="btn-primary btn-sm" id="pckSubmit">Submit</button>
</div>
</div>
</div>`;

const loaderMarkup = `<div class="d-flex justify-content-center m-5">
<div class="spinner-grow text-info" role="status"></div>
<div class="spinner-grow text-info" role="status"></div>
<div class="spinner-grow text-info" role="status"></div>
</div>`;

const elements = {
    container: document.querySelector('.container'),
    navCat: document.getElementById("nav-cat"),
    navPck: document.getElementById("nav-pck"),
    HomePg: document.getElementById("home-pg")
};

const addLoader = () => {
    elements.container.innerHTML = '';
    elements.container.insertAdjacentHTML('afterbegin', loaderMarkup);
}

let apiUrls = {
    getAllCat: "category",
    newCat: "category",
    delCat: "category",
    updateCat: "category",
    getAllPck: "package",
    newPck: "package",
    delPck: "package",
    updatePck: "package"
}

let packageList = [],
    categoryList = [];

/*

 View

 */

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

//--------------------------------------------

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
        <p>Image URL: ${pck.img}, Gradient: #1: ${pck.gradient[0]} #2: ${pck.gradient[1]}</p>
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

//add pck name below "Packages included"

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

//------------------------------------------

/*

 Model

 */

// Category List from data received from API

const createCategoryList = (dataInput) => {

    const category = {
        catId: dataInput.id,
        name: dataInput.categoryName,
        img: dataInput.categoryIMG,
        packages: dataInput.packageIDs.split(","),
    }

    categoryList.unshift(category);
}

// Package List from data received from API

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

// Receiving user submitted input

const getCategoryInput = () => {

    let categoryInput = {
        name: document.getElementById("catName").value,
        img: document.getElementById("catImgUrl").value,
        packages: 0 || readDropDownVal()
    };

    postCatData(categoryInput, apiUrls.newCat);

}

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

const getPackageInput = () => {

    let packageInput = {
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

    postPckData(packageInput, apiUrls.newPck);

}

// Delete functions 

const deleteCategory = (id) => {

    let catID = id;

    if (confirm("Do you want to delete this?")) {

        deleteData(catID, apiUrls.delCat);

        categoryList = categoryList.filter(categorys => categorys.catId !== id);

        renderCategory(categoryList);
    }

}

const deletePackage = (id) => {

    let packID = id;

    if (confirm("Do you want to delete this? Deleting this package will also remove it from categories it is present.")) {

        deleteData(packID, apiUrls.delPck, true);

        packageList = packageList.filter(packages => packages.pckId !== id);

        renderPackages(packageList);
    }

}

// Edit functions

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


// Backend Comms -------------------------------

let corsProxy = 'https://cors-anywhere.herokuapp.com/';


async function getPckData(endpoint) {
    try {
        let response = await fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}`);
        let data = await response.json();

        console.log(data);

        packageList = [];

        data.forEach(createPackageList);

        console.log(packageList);

        elements.container.innerHTML = '';

        renderPckPage(elements.container);

        renderPackages(packageList);

    } catch (err) {
        alert("Failed to retrieve data from server :(");
        console.log(err);
    }
}

async function getCatData(endpoint, render = true) {
    try {
        let response = await fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}`);
        let data = await response.json();

        console.log(data);

        categoryList = [];

        data.forEach(createCategoryList);

        console.log(categoryList);

        if (render) {
            elements.container.innerHTML = '';

            renderCatPage(elements.container);

            renderCategory(categoryList);
        }

    } catch (err) {
        alert("Failed to retrieve data from server :(");
        console.log(err);
    }
}


const postPckData = (content, endpoint) => {
    const postMethod = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(content)
    }

    addLoader();

    console.log(postMethod);

    fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}`, postMethod)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            getPckData(apiUrls.getAllPck);

        }).catch(err => console.log(err));
}

const postCatData = (content, endpoint) => {
    const postMethod = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(content)
    }

    addLoader();

    console.log(postMethod);

    fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}`, postMethod)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            getCatData(apiUrls.getAllCat);

        }).catch(err => console.log(err));
}

const putData = (content, endpoint) => {
    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(content)
    }

    console.log(putMethod);

    fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}`, putMethod)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

const deleteData = (id, endpoint, catLoad = false) => {
    const deleteMethod = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }

    console.log(deleteMethod);

    fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}/${id}`, deleteMethod)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (catLoad) {
                getCatData(apiUrls.getAllCat, false);
            }
        })
        .catch(err => console.log(err));
}

const init = () => {

    addLoader();

    getCatData(apiUrls.getAllCat, false);

    getPckData(apiUrls.getAllPck);

}

init();

elements.navCat.addEventListener('click', function() {

    renderCatPage(elements.container);
    renderCategory(categoryList);

});

elements.navPck.addEventListener('click', function() {

    renderPckPage(elements.container);
    renderPackages(packageList);

});

elements.HomePg.addEventListener('click', function() {

    renderPckPage(elements.container);
    renderPackages(packageList);

});