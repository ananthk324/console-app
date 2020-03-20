// Markups

const catMarkup = `<div class="categories" style="padding: 2rem 2rem">
    <div class="cat-btn-ctnr">
        <h3 style="display: inline">Categories</h3>
        <button type="button" class="btn btn-info" id="new-cat-btn">New Category</button>
        <button type="button" class="btn btn-info" id="list-cat-btn">List Categories</button>
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
            <input type="text" class="form-control" placeholder="www.example.com/image.jpg" id="catImgUrl" required>
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
            <div class="input-group-prepend">
                <button class="btn-primary btn-sm" id="catSubmit">Submit</button>
            </div>
        </div>
    </div>

    </div>
    </div>`


const pckMarkup = `<div class="packages" style="padding: 2rem 2rem">
    <div class="pck-btn-ctnr">
        <h3 style="display: inline">Packages</h3>
        <button type="button" class="btn btn-info" id="new-pck-btn">New Package</button>
        <button type="button" class="btn btn-info" id="list-pck-btn">List Packages</button>
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
        <input type="text" class="form-control" placeholder="https://www.example.com/image_url.jpg/" id="pckImgUrl" required>
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

<div class="input-group-preend">
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
    navPck: document.getElementById("nav-pck")
};

const addLoader = () => {
    elements.container.innerHTML = '';
    elements.container.insertAdjacentHTML('afterbegin', loaderMarkup);
}

const clearLoader = () => { elements.container.innerHTML = ''; }

let apiUrls = {
    getAllCat: "category",
    newCat: "category",
    delCat: "category/",
    updateCat: "category",
    getAllPck: "package",
    newPck: "package",
    delPck: "package/",
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

        if (packageList.length > 0) {
            packageList.forEach(renderDropdownItems);
        } else {
            const blankMarkup = `<p class="dropdown-item">No Packages</p>`;
            document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', blankMarkup);
        }
        document.getElementById("catSubmit").addEventListener('click', getCategoryInput);
    });

    document.getElementById("list-cat-btn").addEventListener('click', () => {

        commitRenderCat(categoryList);

    });

}

const renderDropdownItems = (pck) => {

    const dropdownMarkup = `<input class="dropdown-item" type="checkbox" id="${pck.pckId}">${pck.name}</input>`

    document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', dropdownMarkup);
}

const renderPckPage = (container) => {

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', pckMarkup);

    document.getElementById("new-pck-btn").addEventListener('click', () => {

        document.querySelector('.package-container').innerHTML = '';
        document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckInputMarkup);
        document.getElementById("pckSubmit").addEventListener('click', getPackageInput);

    });

    document.getElementById("list-pck-btn").addEventListener('click', () => {

        commitRenderPck(packageList);

    });

}

//--------------------------------------------

const commitRenderPck = (pckList) => {

    //localStorage.setItem('packageList', JSON.stringify(pckList));

    document.querySelector('.package-container').innerHTML = '';

    pckList.forEach(renderPck);

}

const renderPck = (pck) => {

    const pckDataMarkup = `<div class="card">
    <div class="card-body">
        <p class="card-title"><b>#${pck.pckId}</b> Package Name: ${pck.name}</p>
        <p>Skip: ${pck.skip}, Fasting Start: ${pck.fasting_start}</p>
        <p>Type: ${pck.type}, Fasting End: ${pck.fasting_end}</p>
        <p>Fasting Hrs: ${pck.fasting_hrs}, Eating Hrs: ${pck.eating_hrs}</p>
        <p>Desc: ${pck.description}, Image URL: ${pck.img}</p>
        <p>Gradient: ${pck.gradient}</p>
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deletePackage(${pck.pckId})">Delete</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="editPackage(${pck.pckId})">Edit</button>
        </div>
    </div>
    </div>`

    document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckDataMarkup);
}

//--------------------------------------------

const commitRenderCat = (catList) => {

    //localStorage.setItem('categoryList', JSON.stringify(catList));

    document.querySelector('.category-container').innerHTML = '';

    catList.forEach(renderCat);

}

const renderCat = (cat) => {

    const catDataMarkup = `<div class="card">
    <div class="card-body">
        <p class="card-title"><b>#${cat.catId}</b> Category Name: ${cat.name}, Image URL: ${cat.img}</p>
        <p>Packages Included: ${cat.packages}</p>
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteCategory(${cat.catId})">Delete</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="editCategory(${cat.catId})">Edit</button>
        </div>

    </div>
    </div>`

    document.querySelector('.category-container').insertAdjacentHTML('beforeend', catDataMarkup);
}

//------------------------------------------


/*

 Model

 */


/*

let categoryList = JSON.parse(localStorage.getItem('categoryList')) || [],
   packageList = JSON.parse(localStorage.getItem('packageList')) || [];

 */


// Category List from data received from API

const createCategoryList = (dataInput) => {

    const category = {
        catId: dataInput.id,
        name: dataInput.categoryName,
        img: dataInput.categoryIMG,
        packages: dataInput.packageIDs.split(",")
    }

    categoryList.push(category);

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

    packageList.push(package);
}


// To handle new data

const addCategory = (categoryInput) => {
    const category = {
        catId: categoryList.length > 0 ? categoryList[categoryList.length - 1].catId + 1 : 1,
        name: categoryInput.name,
        img: categoryInput.img,
        packages: categoryInput.packages,
    }

    //appCatMap.set(category.catId, category.appId);

    categoryList.push(category);

    postData(category, apiUrls.newCat);

    commitRenderCat(categoryList);
}

const addPackage = (packageInput) => {

    const package = {
        pckId: packageList.length > 0 ? packageList[packageList.length - 1].pckId + 1 : 1,
        name: packageInput.name,
        skip: packageInput.skip,
        fasting_start: packageInput.fasting_start,
        fasting_end: packageInput.fasting_end,
        type: packageInput.type,
        fasting_hrs: packageInput.fasting_hrs,
        eating_hrs: packageInput.eating_hrs,
        description: packageInput.description,
        img: packageInput.img,
        gradient: [packageInput.gradient[0], packageInput.gradient[1]]
    }

    //catPckMap.set(package.pckId, package.catId);

    packageList.push(package);

    postData(package, apiUrls.newPck);

    commitRenderPck(packageList);

}


// Receiving user submitted input

const getCategoryInput = () => {

    let catInput = {
        catId: 0,
        name: document.getElementById("catName").value,
        img: document.getElementById("catImgUrl").value,
        packages: 0 || readDropDownVal()
    };

    addCategory(catInput);

}

const readDropDownVal = () => {

    let selected = new Array();
    let checks = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            selected.push(checks[i].id);
        }
    }
    return selected;
}

const getPackageInput = () => {
    let packageInput = {
        pckId: 0,
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

    addPackage(packageInput);

}

// Delete functions 

const deleteCategory = (id) => {

    if (confirm("Do you want to delete this?")) {
        categoryList = categoryList.filter(categorys => categorys.catId !== id);

        deleteData(id, apiUrls.delCat);

        commitRenderCat(categoryList);
    }

}

const deletePackage = (id) => {

    if (confirm("Do you want to delete this? Deleting this package will also remove it from categories it is present.")) {
        packageList = packageList.filter(packages => packages.pckId !== id);

        deleteData(id, apiUrls.delPck);

        commitRenderPck(packageList);
    }

}

// Edit functions

const editCategory = (id) => {

    let index;

    document.querySelector('.category-container').innerHTML = '';
    document.querySelector('.category-container').insertAdjacentHTML('beforeend', catInputMarkup);

    if (packageList.length > 0) {
        packageList.forEach(renderDropdownItems);
    } else {
        const blankMarkup = `<p class="dropdown-item">No Packages</p>`;
        document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', blankMarkup);
    }

    for (let i = 0; i < categoryList.length; i++) {
        if (id === categoryList[i].catId) {
            index = i;
        }
    }

    document.getElementById("catName").value = categoryList[index].name;
    document.getElementById("catImgUrl").value = categoryList[index].img;

    document.getElementById("catSubmit").addEventListener('click', () => {

        categoryList[index].name = document.getElementById("catName").value;
        categoryList.img = document.getElementById("catImgUrl").value;
        categoryList.packages = readDropDownVal();

        putData(categoryList[index], apiUrls.updateCat);
        commitRenderCat(categoryList);
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
        commitRenderPck(packageList);
    });
}


// Backend Comms -------------------------------

let corsProxy = 'https://cors-anywhere.herokuapp.com/';


async function getAllData(endpoint, dataType) {
    try {
        let response = await fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}`);
        let data = await response.json();

        if (dataType === "pck") {
            data.forEach(createPackageList);

            console.log(packageList);
        } else {
            data.forEach(createCategoryList);

            console.log(categoryList);

            clearLoader();
        }

    } catch (err) {
        alert("Failed to retrieve data from server :(");
        console.log(err);
    }
}

const postData = (content, endpoint) => {
    const postMethod = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(content)
    }

    console.log(postMethod);

    fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}`, postMethod)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
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

const deleteData = (id, endpoint) => {
    const deleteMethod = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }

    fetch(`${corsProxy}https://morning-hamlet-41477.herokuapp.com/${endpoint}/${id}`, deleteMethod)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
}

const init = () => {

    addLoader();

    getAllData(apiUrls.getAllPck, "pck");

    getAllData(apiUrls.getAllCat, "cat");

}

init();

elements.navCat.addEventListener('click', function() {
    renderCatPage(elements.container);
});

elements.navPck.addEventListener('click', function() {
    renderPckPage(elements.container);
});