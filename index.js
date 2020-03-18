/*

 View

 */

//Markups

const appMarkup = `<div class="apps" style="padding: 2rem 2rem">
    <div>
        <h3 style="display: inline">Apps</h3>
        <button type="button" class="btn btn-info" id="new-app-btn">New App</button>
        <button type="button" class="btn btn-info" id="list-app-btn">List Apps</button>
    </div>
    <div class="app-container">
    </div>
    </div>`;

const catMarkup = `<div class="categories" style="padding: 2rem 2rem">
    <div>
        <h3 style="display: inline">Categories</h3>
        <button type="button" class="btn btn-info" id="new-cat-btn">New Category</button>
        <button type="button" class="btn btn-info" id="list-cat-btn">List Categories</button>
    </div>
    <div class="category-container">
    </div>
    </div>`;


const pckMarkup = `<div class="packages" style="padding: 2rem 2rem">
    <div>
        <h3 style="display: inline">Packages</h3>
        <button type="button" class="btn btn-info" id="new-pck-btn">New Package</button>
        <button type="button" class="btn btn-info" id="list-pck-btn">List Packages</button>
    </div>
    <div class="package-container">
    </div>
    </div>`;


const pckInputMarkup = `<div class="card">
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

<button class="btn-primary btn-sm" id="pckSubmit">Submit</button>
</div>
</div>`;

const catInputMarkup = `<div class="card">
<div class="card-body">
<div class="row">
    <div class="input-group col-md-6">
        <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
        </div>
        <input type="text" class="form-control" placeholder="categoryname" id="catName" required>
    </div>
    <div class="input-group col-md-6">
        <div class="input-group-prepend">
            <span class="input-group-text">Image URL</span>
        </div>
        <input type="text" class="form-control" placeholder="www.example.com/image.jpg" id="catImgUrl" required>
    </div>
</div>

<button class="btn-primary btn-sm" id="catSubmit">Submit</button>
</div>
</div>`

const appInputMarkup = `<div class="card">
<div class="card-body">
<div class="row">
    <div class="input-group col-md-4">
        <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
        </div>
        <input type="text" class="form-control" placeholder="appname" id="appName" required>
    </div>
    <div class="input-group col-md-4">
        <div class="input-group-prepend">
            <span class="input-group-text">App Package Name</span>
        </div>
        <input type="text" class="form-control" placeholder="package name" id="appPckName" required>
    </div>
    <div class="input-group col-md-4">
        <div class="input-group-prepend">
            <span class="input-group-text">Category ID</span>
        </div>
        <input type="text" class="form-control" placeholder="1, 2, 3" id="appCatIds" required>
    </div>
</div>

<button class="btn-primary btn-sm" id="appSubmit">Submit</button>
</div>
</div>`

$(function() {
    $(".nav-item").click(function() {
        $(this).toggleClass("active");
    });
});

const elements = {
    container: document.querySelector('.container'),
    navApp: document.getElementById("nav-app"),
    navCat: document.getElementById("nav-cat"),
    navPck: document.getElementById("nav-pck")
};

const renderAppPage = (container) => {

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', appMarkup);

    document.getElementById("new-app-btn").addEventListener('click', () => {

        document.querySelector('.app-container').innerHTML = '';
        document.querySelector('.app-container').insertAdjacentHTML('beforeend', appInputMarkup);
        document.getElementById("appSubmit").addEventListener('click', getAppInput);

    });

    document.getElementById("list-app-btn").addEventListener('click', () => {

        commitRenderApp(appList);

    });

}

const renderCatPage = (container) => {

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', catMarkup);

    document.getElementById("new-cat-btn").addEventListener('click', () => {

        document.querySelector('.category-container').innerHTML = '';
        document.querySelector('.category-container').insertAdjacentHTML('beforeend', catInputMarkup);
        document.getElementById("catSubmit").addEventListener('click', getCategoryInput);

    });

    document.getElementById("list-cat-btn").addEventListener('click', () => {

        commitRenderCat(categoryList);

    });

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

//---------------------------------------

const renderPck = (pck) => {

    const pckDataMarkup = `<div class="card">
    <div class="card-body">
        <p class="card-title">Package Name: ${pck.name}</p>
        <p>Skip: ${pck.skip}, Fasting Start: ${pck.fasting_start}</p>
        <p>Type: ${pck.type}, Fasting End: ${pck.fasting_end}</p>
        <p>Fasting Hrs: ${pck.fasting_hrs}, Eating Hrs: ${pck.eating_hrs}</p>
        <p>Desc: ${pck.description}, Image URL: ${pck.img}</p>
        <p>Gradient: ${pck.gradient}</p>
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="">Edit</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deletePackage(${pck.pckId})">Delete</button>
        </div>
    </div>
    </div>`

    document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckDataMarkup);
}

const commitRenderPck = (pckList) => {

    localStorage.setItem('packageList', JSON.stringify(pckList));

    document.querySelector('.package-container').innerHTML = '';
    pckList.forEach(renderPck);

}

//------------------------------------------

const renderCat = (cat) => {

    const catDataMarkup = `<div class="card">
    <div class="card-body">
        <p class="card-title">Category Name: ${cat.name}, Image URL: ${cat.img}</p>
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteCategory(${cat.catId})">Delete</button>
        </div>
    </div>
    </div>`

    document.querySelector('.category-container').insertAdjacentHTML('beforeend', catDataMarkup);
}

const commitRenderCat = (catList) => {

    localStorage.setItem('categoryList', JSON.stringify(catList));

    document.querySelector('.category-container').innerHTML = '';
    catList.forEach(renderCat);

}

//------------------------------------------

const renderApp = (app) => {

    const appDataMarkup = `<div class="card">
    <div class="card-body">
        <p class="card-title">Category Name: ${app.name}, App Packagename: ${app.appPackageName}
        , Category IDs: ${app.categoryIds}</p>
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteApp(${app.appId})">Delete</button>
        </div>
    </div>
    </div>`

    document.querySelector('.app-container').insertAdjacentHTML('beforeend', appDataMarkup);
}

const commitRenderApp = (appList) => {

    localStorage.setItem('appList', JSON.stringify(appList));

    document.querySelector('.app-container').innerHTML = '';
    appList.forEach(renderApp);

}

// -----------------------------------------

/*

 Model

 */

let appList = JSON.parse(localStorage.getItem('appList')) || [],
    categoryList = JSON.parse(localStorage.getItem('categoryList')) || [],
    packageList = JSON.parse(localStorage.getItem('packageList')) || [];

let catPckMap = new Map(),
    appCatMap = new Map();

// To handle new and change of data
const addApp = (appInput) => {
    const app = {
        appId: appList.length > 0 ? appList[appList.length - 1].appId + 1 : 1,
        name: appInput.name,
        appPackageName: appInput.appPackageName,
        categoryIds: appInput.categoryIds,
    }

    appList.push(app);

    commitRenderApp(appList);
}

const addCategory = (categoryInput) => {
    const category = {
        catId: categoryList.length > 0 ? categoryList[categoryList.length - 1].catId + 1 : 1,
        appId: categoryInput.appId,
        name: categoryInput.name,
        img: categoryInput.img
    }

    appCatMap.set(category.catId, category.appId);

    categoryList.push(category);

    commitRenderCat(categoryList);
}

const addPackage = (packageInput) => {
    const package = {
        pckId: packageList.length > 0 ? packageList[packageList.length - 1].pckId + 1 : 1,
        catId: packageInput.catId,
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

    catPckMap.set(package.pckId, package.catId);

    packageList.push(package);

    commitRenderPck(packageList);

}

// Delete functions 

const deleteApp = (id) => {
    appList = appList.filter(apps => apps.appId !== id);
    commitRenderApp(appList);
}

const deleteCategory = (id) => {
    categoryList = categoryList.filter(categorys => categorys.catId !== id);
    commitRenderCat(categoryList);
}

const deletePackage = (id) => {
    packageList = packageList.filter(packages => packages.pckId !== id);
    commitRenderPck(packageList);
}


// Edit functions

const editApp = (id, appInput) => {
    appList = appList.map(appInput => appInput.appId === id ? {
        name: appInput.name
    } : appInput);
}

const editCategory = (id, categoryInput) => {
    categoryList = categoryList.map(categoryInput => categoryInput.catId === id ? {
        name: categoryInput.name,
        img: categoryInput.img
    } : categoryInput);
}

const editPackage = (id, packageInput) => {
    packageList = packageList.map(packageInput => packageInput.pckId === id ? {
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
    } : packageInput);
}


/*

 Controller

 */

const getAppInput = () => {
    let appInput = {
        appId: 0,
        name: document.getElementById("appName").value,
        appPackageName: document.getElementById("appPckName").value,
        categoryIds: document.getElementById("appCatIds").value
    };

    addApp(appInput);

}

const getCategoryInput = () => {
    let catInput = {
        catId: 0,
        appId: 0,
        name: document.getElementById("catName").value,
        img: document.getElementById("catImgUrl").value
    };

    addCategory(catInput);

}

const getPackageInput = () => {
    let packageInput = {
        pckId: 0,
        catId: 0,
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


elements.navApp.addEventListener('click', function() {
    renderAppPage(elements.container);
});

elements.navCat.addEventListener('click', function() {
    renderCatPage(elements.container);
});

elements.navPck.addEventListener('click', function() {
    renderPckPage(elements.container);
});


// Backend Comms ---- need to add URL specifying the ids

const sendData = (Input) => {
    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(Input)
    }
    console.log(putMethod);

    fetch(`https://jsonplaceholder.typicode.com/users/${Input.id}`, putMethod)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

const deleteData = (id) => {
    const deleteMethod = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }
    console.log(deleteMethod);

    fetch(`https://jsonplaceholder.typicode.com/users/${Input.id}`, deleteMethod)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}