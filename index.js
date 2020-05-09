// Markups to be rendered

const appMarkup = `<div class="apps" id="app" style="padding: 2rem 6rem">
    <div class="app-btn-ctnr">
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" id="search-box" class="form-control" placeholder="Search...">
        </div>
        <h3 style="flex: 1;">Apps</h3>
        <button type="button" class="btn btn-outline-primary" id="new-app-btn">New App <i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    <hr>
        <div class="app-container">
        
        </div>
    </div>`;

const appInputMarkup = `<div class="card w-80 input">
    <div class="card-body input">
    <div class="row">
        <div class="input-group col-md-4" style="padding-left: 15px; padding-right: 7.5px;">
            <div class="input-group-prepend app">
                <span class="input-group-text app">App Name</span>
            </div>
            <input type="text" class="form-control" placeholder="Fasting App" id="appName" required>
        </div>
        <div class="input-group col-md-5" style="padding-left: 7.5px; padding-right: 7.5px;">
            <div class="input-group-prepend app">
                <span class="input-group-text app">App Pkg Name</span>
            </div>
            <input type="text" class="form-control" placeholder="com.riafy.fasting" id="appPckName" required>
        </div>
        <div class="input-group col-md-3" style="padding-left: 7.5px; padding-right: 15px;">    
            <div class="input-group-prepend button">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Categories</button>
                    <div class="dropdown-menu" multiple>
                        
                    </div>
            </div>
        </div>
    </div>

    <div class="row" style="padding-left: 15px;">
        <button class="btn-primary btn-sm" id="appSubmit">Submit</button>
    </div>

    <div class="row">
        <div class="input-group col-md-9" style="padding-left: 15px; padding-right: 7.5px;">
        </div>
        <div class="input-group col-md-3" style="padding-left: 7.5px; padding-right: 15px;">
            <ul id="selectList" class="list-group">
        </div>
    </div>

    </div>
    </div>`

const catMarkup = `<div class="categories" id="cat" style="padding: 2rem 6rem">
    <div class="cat-btn-ctnr">
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" id="search-box" class="form-control" placeholder="Search...">
        </div>
        <h3 style="flex: 1;">Categories</h3>
        <button type="button" class="btn btn-outline-primary" id="new-cat-btn">New Category <i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    <hr>
        <div class="category-container">
        
        </div>
    </div>`;

const catInputMarkup = `<div class="card w-80 input">
    <div class="card-body input">
    <div class="row">
        <div class="input-group col-md-6" style="padding-left: 15px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Name</span>
            </div>
            <input type="text" class="form-control" placeholder="Beginner" id="catName" required>
        </div>
        <div class="input-group col-md-6" style="padding-left: 7.5px; padding-right: 15px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Image URL</span>
            </div>
            <input type="text" class="form-control" placeholder="https://www.example.com/image.jpg" id="catImgUrl" required>
        </div>
    </div>

    <div class="row">
        <div class="input-group col-md-6" style="padding-left: 15px; padding-right: 7.5px;">    
            <div class="input-group-prepend button">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Packages</button>
                    <div class="dropdown-menu" multiple>
                        
                    </div>
            </div>
        </div>
        <div class="input-group col-md-6" style="padding-left: 7.5px; padding-right: 15px; display: flex; justify-content: flex-end;">
            <button class="btn-primary btn-sm" id="catSubmit">Submit</button>
        </div>
    </div>

    <div class="row" style="padding-left: 15px; padding-top: 20px;">
        <ul id="selectList" class="list-group">
    </div>
    
    </div>
    </div>`


const pckMarkup = `<div class="packages" id="pkgs" style="padding: 2rem 6rem">
    <div class="pck-btn-ctnr">
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" id="search-box" class="form-control" placeholder="Search...">
        </div>
        <h3 style="flex: 1;">Packages</h3>
        <button type="button" class="btn btn-outline-primary" id="new-pck-btn">New Package <i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    <hr>
        <div class="package-container">

        </div>
    </div>`;

const pckInputMarkup = `<div class="card w-80 input">
    <div class="card-body input">
    <div class="row">
        <div class="input-group col-md-4" style="padding-left: 15px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Name</span>
            </div>
            <input type="text" class="form-control" placeholder="16-8 fasting dinner" id="pckName" required>
        </div>
        <div class="input-group col-md-4" style="padding-left: 7.5px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Skip</span>
            </div>
            <input type="text" class="form-control" placeholder="skip dinner" id="pckSkip" required>
        </div>
        <div class="input-group col-md-4" style="padding-left: 7.5px; padding-right: 15px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Type</span>
            </div>
            <input type="text" class="form-control" placeholder="hour" id="pckType" required>
        </div>
    </div>
    
    <div class="row">
        <div class="input-group col-md-4" style="padding-left: 15px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Fasting Start</span>
            </div>
            <input type="text" class="form-control" placeholder="16, 0, 16, 0" id="pckFastingStart" required>
        </div>
        <div class="input-group col-md-4" style="padding-left: 7.5px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Fasting End</span>
            </div>
            <input type="text" class="form-control" placeholder="8, 0, 8, 0" id="pckFastingEnd" required>
            </div>
        <div class="input-group col-md-4" style="padding-left: 7.5px; padding-right: 15px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Fasting Hours</span>
            </div>
            <input type="text" class="form-control" placeholder="16, 0, 16, 0" id="pckFastingHrs" required>
        </div>
    </div>
    
    <div class="row">
        <div class="input-group col-md-4" style="padding-left: 15px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Eating Hours</span>
            </div>
            <input type="number" class="form-control" placeholder="8" id="pckEatingHrs" required>
        </div>
        <div class="input-group col-md-4" style="padding-left: 7.5px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Gradient 1</span>
            </div>
            <input type="text" class="form-control" placeholder="#fff" id="pckGradient1" required>
        </div>
        <div class="input-group col-md-4" style="padding-left: 7.5px; padding-right: 15px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Gradient 2</span>
            </div>
            <input type="text" class="form-control" placeholder="#000" id="pckGradient2" required>
        </div>
    </div>
    
    <div class="row">
        <div class="input-group col-md-6" style="padding-left: 15px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Weightloss</span>
            </div>
            <input type="text" class="form-control" placeholder="weightloss" id="pckWeightloss" required>
        </div>
        <div class="input-group col-md-6" style="padding-left: 7.5px; padding-right: 15px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Health</span>
            </div>
            <input type="text" class="form-control" placeholder="health" id="pckHealth" required>
        </div>
    </div>

    <div class="row">
        <div class="input-group col-md-6" style="padding-left: 15px; padding-right: 7.5px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Tags</span>
            </div>
            <input type="text" class="form-control" placeholder="healthy, fasting" id="pckTags" required>
        </div>
        <div class="input-group col-md-6" style="padding-left: 7.5px; padding-right: 15px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Image URL</span>
            </div>
            <input type="text" class="form-control" placeholder="https://www.example_url.com/image.jpg/" id="pckImgUrl" required>
        </div>
    </div>

    <div class="row">
        <div class="input-group col-md-12" style="padding-left: 15px; padding-right: 15px;">
            <div class="input-group-prepend">
                <span class="input-group-text">Description</span>
            </div>
            <input type="text" class="form-control" placeholder="An apple a day.." id="pckDesc" required>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12" style="padding-left: 15px; padding-right: 15px; display: flex; justify-content: flex-end;">
            <button class="btn-primary btn-sm" id="pckSubmit">Submit</button>
        </div>
    </div>

    </div>
</div>`;

// Loading animation markup

const loaderMarkup = `<div class="d-flex justify-content-center m-5">
<div class="spinner-grow text-info" role="status"></div>
<div class="spinner-grow text-info" role="status"></div>
<div class="spinner-grow text-info" role="status"></div>
</div>`;

const line = `<hr>`;

const langList = `<div class="row" style="display: flex; justify-content: flex-end; padding-bottom: 20px;">
    <div class="input-group col-md-4" style="padding-left: 7.5px; padding-right: 15px;">
        <div class="input-group-prepend">
            <span class="input-group-text">Language</span>
        </div>
        <select class="form-control lang-selector">
            <option value="en" selected>English</option>
            <option value="de">German</option>
            <option value="pl">Polish</option>
            <option value="nl">Dutch</option>
            <option value="it">Italian</option>
            <option value="ru">Russian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="es">Spanish</option>
            <option value="id">Indonesia</option>
            <option value="zh-CN">Chinese</option>
            <option value="pt">Portugese</option>
            <option value="fr">French</option>
            <option value="ro">Romanian</option>
            <option value="ar">Arabic</option>
            <option value="vi">Vietnamese</option>
            <option value="tr">Turkish</option>
            <option value="th">Thai</option>
        </select>
    </div>
</div>`

const languages = ["en", "de", "pl", "nl", "it", "ru", "ja", "ko", "es", "id", "zh-CN", "pt", "fr", "ro", "ar", "vi", "tr", "th"];

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
    updatePck: "package",
    getUser: "getaccess"
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

// Pagination 

// Creates and returns the page nav button. type: 'prev' or 'next'
let globalPage = 1;

const createButton = (page, type, pType) => {
    switch (pType) {
        case "app":
            if (type === 'prev') {
                let buttonPrev = `<button type="button" class="btn btn-sm btn-outline-secondary prev" onclick="renderApp(appList, ${ page - 1})">
                <a href="#app" style="text-decoration: none; color: inherit;"><i class="fa fa-caret-left" aria-hidden="true">
                </i> Page ${page - 1}</a></button>`;
                return buttonPrev;
            } else {
                let buttonNext = `<button type="button" class="btn btn-sm btn-outline-secondary next" onclick="renderApp(appList, ${ page + 1})">
                <a href="#app" style="text-decoration: none; color: inherit;">Page ${page + 1} <i class="fa fa-caret-right" aria-hidden="true">
                </i> </a></button>`;
                return buttonNext;
            }
            break;
        case "cat":
            if (type === 'prev') {
                let buttonPrev = `<button type="button" class="btn btn-sm btn-outline-secondary prev" onclick="renderCategory(categoryList, ${ page - 1})">
                <a href="#cat" style="text-decoration: none; color: inherit;"><i class="fa fa-caret-left" aria-hidden="true">
                </i> Page ${page - 1}</a></button>`;
                return buttonPrev;
            } else {
                let buttonNext = `<button type="button" class="btn btn-sm btn-outline-secondary next" onclick="renderCategory(categoryList, ${ page + 1})">
                <a href="#cat" style="text-decoration: none; color: inherit;">Page ${page + 1} <i class="fa fa-caret-right" aria-hidden="true">
                </i> </a></button>`;
                return buttonNext;
            }
            break;
        default:
            if (type === 'prev') {
                let buttonPrev = `<button type="button" class="btn btn-sm btn-outline-secondary prev" onclick="renderPackages(packageList, ${ page - 1})">
                <a href="#pkgs" style="text-decoration: none; color: inherit;"><i class="fa fa-caret-left" aria-hidden="true">
                </i> Page ${page - 1}</a></button>`;
                return buttonPrev;
            } else {
                let buttonNext = `<button type="button" class="btn btn-sm btn-outline-secondary next" onclick="renderPackages(packageList, ${ page + 1})">
                <a href="#pkgs" style="text-decoration: none; color: inherit;">Page ${page + 1} <i class="fa fa-caret-right" aria-hidden="true">
                </i> </a></button>`;
                return buttonNext;
            }
    }
}

const renderPageButtons = (page, numResults, resPerPage, pType) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = `<div class="nav-button-div"><p> </p>${createButton(page, 'next', pType)}</div>`;
    } else if (page < pages) {
        // Both buttons
        button = `<div class="nav-button-div">  
        ${createButton(page, 'prev', pType)}
        ${createButton(page, 'next', pType)}</div>`;
    } else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = `<div class="nav-button-div">${createButton(page, 'prev', pType)}<p> </p></div>`;
    } else {
        button = null;
    }
    return button;
};

// ------------------------------

const renderAppPage = (container) => {

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', appMarkup);
    document.getElementById("search-box").disabled = false;
    document.getElementById("search-box").value = "";

    document.getElementById("new-app-btn").addEventListener('click', () => {

        document.getElementById("search-box").disabled = true;
        document.getElementById("search-box").value = "";
        document.querySelector('.app-container').innerHTML = '';
        document.querySelector('.app-container').insertAdjacentHTML('beforeend', appInputMarkup);

        selected = [], selName = [];
        
        catDrpDwnMenuRender();

        let el = document.getElementById("selectList");
        let sortable = Sortable.create(el);

        document.getElementById("appSubmit").addEventListener('click', getAppInput);
    });

    document.getElementById("search-box").addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        if (searchString !== "") {
            const filteredApps = appList.filter((apps) => {
                return apps.appname.toLowerCase().includes(searchString);
            });
            document.querySelector('.app-container').innerHTML = '';
            filteredApps.forEach(renderEachApp);
        } else {
            renderApp(appList, globalPage);
        }
    });
}

// Renders the dropdown menu items

const catDrpDwnMenuRender = () => {

    if (categoryList.length > 0) {
        categoryList.forEach(cat => {

            const catDropdownMarkup = `
            <div class="dropdown-item"><input class="${cat.name}" type="checkbox" onclick="checkHandler('${cat.catId}','${cat.name}')" id="${cat.catId}">
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
    document.getElementById("search-box").disabled = false;
    document.getElementById("search-box").value = "";

    document.getElementById("new-cat-btn").addEventListener('click', () => {

        document.getElementById("search-box").disabled = true;
        document.getElementById("search-box").value = "";
        document.querySelector('.category-container').innerHTML = '';
        document.querySelector('.category-container').insertAdjacentHTML('beforeend', catInputMarkup);

        selected = [], selName = [];
        
        let el = document.getElementById("selectList");
        let sortable = Sortable.create(el);

        pckDrpDwnMenuRender();

        document.getElementById("catSubmit").addEventListener('click', getCategoryInput);
    });

    document.getElementById("search-box").addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        if (searchString !== "") {
            const filteredCategories = categoryList.filter((categories) => {
                return categories.name.toLowerCase().includes(searchString);
            });
            document.querySelector('.category-container').innerHTML = '';
            filteredCategories.forEach(renderEachCat);
        } else {
            renderCategory(categoryList, globalPage);
        }
    });

}

const pckDrpDwnMenuRender = () => {

    if (packageList.length > 0) {
        packageList.forEach(pck => {

            const dropdownMarkup = `
            <div class="dropdown-item"><input class="${pck.name}" type="checkbox" onclick="checkHandler('${pck.pckId}','${pck.name}')" id="${pck.pckId}">
            <label for="${pck.pckId}">${pck.name}</label>
            </div>`;
            document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', dropdownMarkup);

        });
    } else {
        const blankMarkup = `<div class="dropdown-item">No Packages</div>`;
        document.querySelector('.dropdown-menu').insertAdjacentHTML('beforeend', blankMarkup);
    }

}

let selected = [], selName = [];

const checkHandler = (ID, name) => {

    ID = parseInt(ID, 10);
    if (document.getElementById(`${ID}`).checked === false) {
        selected.splice(selected.indexOf(ID), 1);
        selName.splice(selName.indexOf(name), 1);
    } else {
        selected.push(ID);
        selName.push(name);
    }

    selectedRender();
}

const selectedRender = () => {
    
    document.querySelector('.list-group').innerHTML = '';

    if (selected.length > 0) {

        const textMarkup = `<p class="last-updated">Drag 'n drop in this list to sort.</p>`;
        document.querySelector('.list-group').insertAdjacentHTML('afterbegin', textMarkup);

        for (let j = 0; j < selected.length; j++) {
            const listMarkup = `<li class="list-group-item" id="${selected[j]}">${selName[j]}</li>`;
            document.querySelector('.list-group').insertAdjacentHTML('beforeend', listMarkup);
        }
    }

}

const renderPckPage = (container) => {

    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', pckMarkup);
    document.getElementById("search-box").disabled = false;
    document.getElementById("search-box").value = "";

    document.getElementById("new-pck-btn").addEventListener('click', () => {
        document.getElementById("search-box").disabled = true;
        document.getElementById("search-box").value = "";
        document.querySelector('.package-container').innerHTML = '';
        document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckInputMarkup);
        document.getElementById("pckSubmit").addEventListener('click', getPackageInput);
    });

    document.getElementById("search-box").addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        if (searchString !== "") {
            const filteredPackages = packageList.filter((packages) => {
                return packages.name.toLowerCase().includes(searchString);
            });
            document.querySelector('.package-container').innerHTML = '';
            filteredPackages.forEach(renderEachPck);
        } else {
            renderPackages(packageList, globalPage);
        }
    });

}

// Renders each card containing the data of the list

const renderPackages = (pckList, page = 1, resPerPage = 6) => {

    document.getElementById("search-box").disabled = false;
    document.querySelector('.package-container').innerHTML = '';

    globalPage = page;
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    let pageList = pckList.slice(start, end);
    pageList.forEach(renderEachPck);

    // render pagination buttons
    let button = renderPageButtons(page, pckList.length, resPerPage, "pck");
    if (button !== null) {
        document.querySelector('.package-container').insertAdjacentHTML('beforeend', line);
        document.querySelector('.package-container').insertAdjacentHTML('beforeend', button);
    }
}

const renderEachPck = (pck) => {

    const pckDataMarkup = `<div class="card card-dis w-80">
    <div class="card-header">
        <b>Package Name: ${pck.name}</b>
        <p class="last-updated">Last Updated: ${pck.last_updated}</p>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-md-3" align="center">
            <figure class="figure">
                <img src="${pck.img}" class="figure-img img-fluid rounded" loading="lazy" width="200px" height="200px" alt="image" onError="this.src='./src/css/plc.jpg'">
            </figure>                
            </div>

            <div class="col-md-9" style="border-left: 1px solid #c0c0c0;">
                <p>Skip: ${pck.skip}, Type: ${pck.type}</p>
                <p>Fasting Start: ${pck.fasting_start}, Fasting End: ${pck.fasting_end}</p>
                <p>Fasting Hrs: ${pck.fasting_hrs}, Eating Hrs: ${pck.eating_hrs}</p>
                <p>Weightloss: ${pck.weightloss}, Health: ${pck.health}</p>
                <p>Description: ${pck.description}</p>
                <p>Languages Supported: ${pck.supportLang}</p>
            </div>
        </div>
    </div>
    <div class="card-footer" style="display: flex; justify-content: flex-end;">
        <button type="button" class="btn btn-sm btn-outline-danger" style="margin-right: 5px;" onclick="deletePackage(${pck.pckId})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
        <button type="button" class="btn btn-sm btn-outline-primary" onclick="editPackage(${pck.pckId})"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
    </div>
    </div>`

    document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckDataMarkup);
}

//--------------------------------------------

const renderCategory = (catList, page = 1, resPerPage = 6) => {

    document.getElementById("search-box").disabled = false;
    document.querySelector('.category-container').innerHTML = '';

    globalPage = page;
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    let pageList = catList.slice(start, end);
    pageList.forEach(renderEachCat);

    // render pagination buttons
    let button = renderPageButtons(page, catList.length, resPerPage, "cat");
    if (button !== null) {
        document.querySelector('.category-container').insertAdjacentHTML('beforeend', line);
        document.querySelector('.category-container').insertAdjacentHTML('beforeend', button);
    }
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
    <div class="card-header">
        <b>Category Name: ${cat.name}</b>
        <p class="last-updated">Last Updated: ${cat.last_updated}</p>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-md-3" align="center">
            <figure class="figure">
                <img src="${cat.img}" class="figure-img img-fluid rounded" loading="lazy" width="200px" height="200px" alt="image" onError="this.src='./src/css/plc.jpg'">
            </figure>                
            </div>

            <div class="col-md-9" style="border-left: 1px solid #c0c0c0;">
                <p>Packages Included: ${packageNames}</p>
                <p>Image URL: ${cat.img}</p>
                <p>Languages Supported: ${cat.supportLang}</p>
            </div>
        </div>
    </div>
    <div class="card-footer" style="display: flex; justify-content: flex-end;">
        <button type="button" class="btn btn-sm btn-outline-danger" style="margin-right: 5px;" onclick="deleteCategory(${cat.catId})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
        <button type="button" class="btn btn-sm btn-outline-primary" onclick="editCategory(${cat.catId})"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
    </div>
    </div>`

    document.querySelector('.category-container').insertAdjacentHTML('beforeend', catDataMarkup);
}

//---------------------------------------------

const renderApp = (appList, page = 1, resPerPage = 6) => {

    document.getElementById("search-box").disabled = false;
    document.querySelector('.app-container').innerHTML = '';

    globalPage = page;
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    let pageList = appList.slice(start, end);
    pageList.forEach(renderEachApp);

    // render pagination buttons
    let button = renderPageButtons(page, appList.length, resPerPage, "app");
    if (button !== null) {
        document.querySelector('.app-container').insertAdjacentHTML('beforeend', line);
        document.querySelector('.app-container').insertAdjacentHTML('beforeend', button);
    }
}

const renderEachApp = (app) => {

    let categoryNames = [];

    for (let k = 0; k < app.category.length; k++) {
        let ID = parseInt(app.category[k], 10);
        categoryList.forEach(cat => {
            if (cat.catId === ID) {
                categoryNames.push((" " + cat.name));
            }
        });
    }

    const appDataMarkup = `<div class="card card-dis w-80">
    <div class="card-header">
        <b>App Name: ${app.appname}</b>
        <p class="last-updated">Last Updated: ${app.last_updated}</p>
    </div>
    <div class="card-body app">
        <p>App Package Name: ${app.apppackagename}</p>
        <p>Categories Included: ${categoryNames}</p>
    </div>
    <div class="card-footer app" style="display: flex; justify-content: flex-end;">
        <button type="button" class="btn btn-sm btn-outline-danger" style="margin-right: 5px;" onclick="deleteApp(${app.appid})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
        <button type="button" class="btn btn-sm btn-outline-primary" onclick="editApp(${app.appid})"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
    </div>
    </div>`

    document.querySelector('.app-container').insertAdjacentHTML('beforeend', appDataMarkup);
}

/*

 Model

 */

// To create App List from data received from GET API call

const createAppList = (dataInput) => {

    let lastUpdate = dataInput.updated_at;
    let formatted_lastUpdate = moment(lastUpdate).format('lll');

    const app = {
        appid: dataInput.id,
        appname: dataInput.appName,
        apppackagename: dataInput.appPackageName,
        category: dataInput.categoryIDs.split(","),
        last_updated: formatted_lastUpdate
    }

    appList.unshift(app);
}

// To create Category List from data received from GET API call

const createCategoryList = (dataInput) => {

    let lastUpdate = dataInput.updated_at;
    let formatted_lastUpdate = moment(lastUpdate).format('lll');

    const category = {
        catId: dataInput.id,
        name: dataInput.categoryName,
        img: dataInput.categoryIMG,
        packages: dataInput.packageIDs.split(","),
        last_updated: formatted_lastUpdate,
        supportLang: dataInput.supportLang ? dataInput.supportLang : null
    }

    categoryList.unshift(category);
}

let languageList = [];

const createCatLangList = (dataInput) => {
    
    const category = {
        language: dataInput.language,
        name: dataInput.name,
        img: dataInput.img,
        packages: dataInput.packages,
        added: dataInput.added
    }

    languageList.unshift(category);
}

// To create Package List from data received from GET API call

const createPackageList = (dataInput) => {

    let packageDetails = JSON.parse(dataInput.packageData);

    let lastUpdate = dataInput.updated_at;
    let formatted_lastUpdate = moment(lastUpdate).format('lll');

    const package = {
        pckId: packageDetails.pckId,
        name: packageDetails.name,
        skip: packageDetails.skip,
        fasting_start: packageDetails.fasting_start.join(", "),
        fasting_end: packageDetails.fasting_end.join(", "),
        type: packageDetails.type,
        fasting_hrs: packageDetails.fasting_hrs.join(", "),
        eating_hrs: packageDetails.eating_hrs,
        description: packageDetails.description,
        weightloss: packageDetails.weightloss,
        health: packageDetails.health,
        tags: packageDetails.tags.join(", "),
        img: packageDetails.img,
        gradient: [packageDetails.gradient[0], packageDetails.gradient[1]],
        last_updated: formatted_lastUpdate,
        supportLang: packageDetails.supportLang ? packageDetails.supportLang : null
    }

    packageList.unshift(package);
}

const createPckLangList = (dataInput) => {

    const package = {
        language: dataInput.language,
        name: dataInput.name,
        skip: dataInput.skip,
        fasting_start: dataInput.fasting_start,
        fasting_end: dataInput.fasting_end,
        type: dataInput.type,
        fasting_hrs: dataInput.fasting_hrs,
        eating_hrs: dataInput.eating_hrs,
        description: dataInput.description,
        weightloss: dataInput.weightloss,
        health: dataInput.health,
        tags: dataInput.tags,
        img: dataInput.img,
        gradient: [dataInput.gradient[0], dataInput.gradient[1]],
        added: dataInput.added
    }

    languageList.unshift(package);
}

// Functions to receive user submitted input and then post it to server

const getAppInput = () => {

    let values = []; 
    
    let elems = document.getElementsByTagName('li');
    let length = document.getElementsByTagName('li').length;
    for(let i = 0; i < length ; i++) {
        values.push(parseInt(elems[i].id, 10));
    }

    let appInput = {
        appid: "",
        appname: document.getElementById("appName").value,
        apppackagename: document.getElementById("appPckName").value,
        category: values
    };

    postData(apiUrls.newApp, "app", appInput);

}

const getCategoryInput = () => {

    let values = [];

    let elems = document.getElementsByTagName('li');
    let length = document.getElementsByTagName('li').length;
    for(let i = 0; i < length ; i++) {
        values.push(parseInt(elems[i].id, 10));
    }

    let categoryInput = {
        language: "en",
        name: document.getElementById("catName").value,
        img: document.getElementById("catImgUrl").value,
        packages: values,
        added: true
    };

    let catPostData = [];

    catPostData.unshift(categoryInput);

    for (let i = 1; i < 18; i++) {

        let val = {
            language: languages[i],
            name: document.getElementById("catName").value,
            img: document.getElementById("catImgUrl").value,
            packages: values,
            added: false
        }

        catPostData.push(val);
    }

    postData(apiUrls.newCat, "cat", catPostData);

}

const getPackageInput = () => {

    let fastingStart, fastingEnd, fastingHrs;
    let fastingStartArr, fastingEndArr, fastingHrsArr;

    fastingStart = document.getElementById("pckFastingStart").value.split(",");
    fastingEnd = document.getElementById("pckFastingEnd").value.split(",");
    fastingHrs = document.getElementById("pckFastingHrs").value.split(",");
    
    fastingStartArr = fastingStart.map(num => {
        return parseInt(num, 10);
    });

    fastingEndArr = fastingEnd.map(num => {
        return parseInt(num, 10);
    });

    fastingHrsArr = fastingHrs.map(num => {
        return parseInt(num, 10);
    });

    if ((fastingStartArr.length === fastingEndArr.length) && 
        (fastingStartArr.length === fastingHrsArr.length) &&
        (fastingStartArr.length === 7)) {

        let packageInput = {
            language: "en",
            name: document.getElementById("pckName").value,
            skip: document.getElementById("pckSkip").value,
            fasting_start: fastingStartArr,
            fasting_end: fastingEndArr,
            fasting_hrs: fastingHrsArr,
            tags: document.getElementById("pckTags").value.split(","),
            type: document.getElementById("pckType").value,
            health: document.getElementById("pckHealth").value,
            weightloss: document.getElementById("pckWeightloss").value,
            eating_hrs: document.getElementById("pckEatingHrs").value,
            description: document.getElementById("pckDesc").value,
            img: document.getElementById("pckImgUrl").value,
            gradient: [document.getElementById("pckGradient1").value, document.getElementById("pckGradient2").value],
            added: true
        };

        let pckPostData = [];

        pckPostData.unshift(packageInput);

        for (let i = 1; i < 18; i++) {

            let val = {
                language: languages[i],
                name: document.getElementById("pckName").value,
                skip: document.getElementById("pckSkip").value,
                fasting_start: fastingStartArr,
                fasting_end: fastingEndArr,
                fasting_hrs: fastingHrsArr,
                tags: document.getElementById("pckTags").value.split(","),
                type: document.getElementById("pckType").value,
                health: document.getElementById("pckHealth").value,
                weightloss: document.getElementById("pckWeightloss").value,
                eating_hrs: document.getElementById("pckEatingHrs").value,
                description: document.getElementById("pckDesc").value,
                img: document.getElementById("pckImgUrl").value,
                gradient: [document.getElementById("pckGradient1").value, document.getElementById("pckGradient2").value],
                added: false
            }

            pckPostData.push(val);
        }

        postData(apiUrls.newPck, "pck", pckPostData);
    } else {
        alert("Length mismatch in Fasting Start, End or Hrs. Should be same length. Please verify input.");
    }
}

// Delete functions, takes ID and updates the local list and calls API

const deleteApp = (id) => {

    let appID = id;

    if (confirm("Do you want to delete this?")) {

        deleteData(appID, apiUrls.delApp, false);

        appList = appList.filter(apps => apps.appid !== id);
        renderApp(appList, globalPage);
    }

}

const deleteCategory = (id) => {

    let catID = id;

    if (confirm("Do you want to delete this? Deleting this category will also remove it from the apps it is added.")) {
        deleteData(catID, apiUrls.delCat, true);
        categoryList = categoryList.filter(categorys => categorys.catId !== id);
        renderCategory(categoryList, globalPage);
    }
}

const deletePackage = (id) => {

    let packID = id;

    if (confirm("Do you want to delete this? Deleting this package will also remove it from categories it is added.")) {
        deleteData(packID, apiUrls.delPck, true);
        packageList = packageList.filter(packages => packages.pckId !== id);

        renderPackages(packageList, globalPage);
    }
}

// Edit functions; receives ID and then put it to server.

const editApp = (id) => {

    let index;

    document.getElementById("search-box").disabled = true;
    document.getElementById("search-box").value = "";
    document.querySelector('.app-container').innerHTML = '';
    document.querySelector('.app-container').insertAdjacentHTML('beforeend', appInputMarkup);

    catDrpDwnMenuRender();

    for (let i = 0; i < appList.length; i++) {
        if (id === appList[i].appid) {
            index = i;
        }
    }

    let selCatIds = [];
    selected = [], selName = [];

    selCatIds = appList[index].category.join();

    selCatIds = selCatIds.split(",");

    document.getElementById("appName").value = appList[index].appname;
    document.getElementById("appPckName").value = appList[index].apppackagename;

    if (appList[index].category.length >= 1 && appList[index].category[0] !== "") {
        for (let j = 0; j < selCatIds.length; j++) {
            document.getElementById(`${selCatIds[j]}`).checked = true;
            selName.push(document.getElementById(`${selCatIds[j]}`).className);
        }
    }

    selected = appList[index].category.map((elem) => {return parseInt(elem, 10)});

    selectedRender();

    let el = document.getElementById("selectList");
    let sortable = Sortable.create(el);

    document.getElementById("appSubmit").addEventListener('click', () => {

        let values = [];
        let elems = document.getElementsByTagName('li');
        let length = document.getElementsByTagName('li').length;
        for(let i = 0; i < length ; i++) {
            values.push(parseInt(elems[i].id, 10));
        }

        appList[index].appname = document.getElementById("appName").value;
        appList[index].apppackagename = document.getElementById("appPckName").value;
        appList[index].category = values;

        putData(appList[index], "app", apiUrls.updateApp);
    });
}

// ----------------------------------------------------

const editCategory = (id) => {
    globalId = id;
    getLangData(`category/${id}`, "cat");
}

const renderCategoryEdit = (lang, run = false) => {

    let index;
    for (let i = 0; i < languageList.length; i++) {
        if (lang === languageList[i].language) {
            index = i;
            globalIndex = i;
        }
    }

    if (run) {
        pckDrpDwnMenuRender();
    }

    let selPckIds = [];

    selPckIds = languageList[index].packages.join();
    selPckIds = selPckIds.split(",");

    selected = [], selName = [];

    if (languageList[index].packages.length >= 1 && languageList[index].packages[0] !== "") {
        for (let j = 0; j < selPckIds.length; j++) {
            document.getElementById(`${selPckIds[j]}`).checked = true;
            selName.push(document.getElementById(`${selPckIds[j]}`).className);
        }
    }

    selected = languageList[index].packages.map((elem) => {return parseInt(elem, 10)});

    selectedRender();
    
    document.getElementById("catName").value = languageList[index].name;
    document.getElementById("catImgUrl").value = languageList[index].img;

    document.getElementById("catSubmit").addEventListener('click', putCatData);
    document.querySelector(".lang-selector").addEventListener('change', readCatEditValues);
}

const readCatEditValues = () => {

    document.querySelector(".lang-selector").removeEventListener('change', readCatEditValues);
    document.getElementById("catSubmit").removeEventListener('click', putCatData);

    let lang = document.querySelector(".lang-selector").value;

    readChangedCatData(globalIndex);
    renderCategoryEdit(lang);
}

const putCatData = () => {
    let lang = document.querySelector(".lang-selector").value;

    let index;

    for (let i = 0; i < languageList.length; i++) {
        if (lang === languageList[i].language) {
            index = i;
        }
    }

    readChangedCatData(index);

    let Data = {
        catId: globalId,
        languageData: languageList
    }

    putData(Data, "cat", apiUrls.updateCat);
}

const readChangedCatData = (pos) => {

    let values = [];
    let elems = document.getElementsByTagName('li');
    let length = document.getElementsByTagName('li').length;
    for(let i = 0; i < length ; i++) {
        values.push(parseInt(elems[i].id, 10));
    }

    if (languageList[pos].name !== document.getElementById("catName").value || 
        languageList[pos].img !== document.getElementById("catImgUrl").value) {
        languageList[pos].added = true;
    }
    // To update all language categories when non-translation fields are edited in English
    if (languageList[pos].language === "en") {
        languageList.forEach(lang => {
            lang.packages = values;
        });

        languageList[pos].name = document.getElementById("catName").value;
        languageList[pos].img = document.getElementById("catImgUrl").value;

    } else {
        languageList[pos].name = document.getElementById("catName").value;
        languageList[pos].img = document.getElementById("catImgUrl").value;
        languageList[pos].packages = values;
    }
}

//---------------------------------------------------

const editPackage = (id) => {
    globalId = id;
    getLangData(`package/${id}`, "pck");
}

const renderPackageEdit = (lang) => {

    let index;
    for (let i = 0; i < languageList.length; i++) {
        if (lang === languageList[i].language) {
            index = i;
            globalIndex = i;
        }
    }

    document.getElementById("pckName").value = languageList[index].name;
    document.getElementById("pckSkip").value = languageList[index].skip;
    document.getElementById("pckFastingStart").value = languageList[index].fasting_start;
    document.getElementById("pckFastingEnd").value = languageList[index].fasting_end;
    document.getElementById("pckType").value = languageList[index].type;
    document.getElementById("pckFastingHrs").value = languageList[index].fasting_hrs;
    document.getElementById("pckEatingHrs").value = languageList[index].eating_hrs;
    document.getElementById("pckDesc").value = languageList[index].description;
    document.getElementById("pckImgUrl").value = languageList[index].img;
    document.getElementById("pckGradient1").value = languageList[index].gradient[0];
    document.getElementById("pckGradient2").value = languageList[index].gradient[1];
    document.getElementById("pckHealth").value = languageList[index].health;
    document.getElementById("pckTags").value = languageList[index].tags;
    document.getElementById("pckWeightloss").value = languageList[index].weightloss;

    // adding event listeners
    document.getElementById("pckSubmit").addEventListener('click', putPckData);
    document.querySelector(".lang-selector").addEventListener('change', readPckEditValues);
}

const readPckEditValues = () => {

    document.querySelector(".lang-selector").removeEventListener('change', readPckEditValues);
    document.getElementById("pckSubmit").removeEventListener('click', putPckData);

    let lang = document.querySelector(".lang-selector").value;

    readChangedPckData(globalIndex);
    renderPackageEdit(lang);
}

let globalIndex, globalId;

const putPckData = () => {
    let lang = document.querySelector(".lang-selector").value;

    let index;

    for (let i = 0; i < languageList.length; i++) {
        if (lang === languageList[i].language) {
            index = i;
        }
    }

    readChangedPckData(index);

    let Data = {
        pckId: globalId,
        languageData: languageList
    }

    putData(Data, "pck", apiUrls.updatePck, true);
}

const readChangedPckData = (pos) => {
    let fastingStart, fastingEnd, fastingHrs;
    let fastingStartArr, fastingEndArr, fastingHrsArr;

    fastingStart = document.getElementById("pckFastingStart").value.split(",");
    fastingEnd = document.getElementById("pckFastingEnd").value.split(",");
    fastingHrs = document.getElementById("pckFastingHrs").value.split(",");
    
    fastingStartArr = fastingStart.map(num => {
        return parseInt(num, 10);
    });

    fastingEndArr = fastingEnd.map(num => {
        return parseInt(num, 10);
    });

    fastingHrsArr = fastingHrs.map(num => {
        return parseInt(num, 10);
    });

    // Verifying length of the values
    if ((fastingStartArr.length === fastingEndArr.length) && 
        (fastingStartArr.length === fastingHrsArr.length) &&
        (fastingStartArr.length === 7)) {

        if (
            languageList[pos].name !== document.getElementById("pckName").value || 
            languageList[pos].skip !== document.getElementById("pckSkip").value || 
            languageList[pos].description !== document.getElementById("pckDesc").value || 
            languageList[pos].img !== document.getElementById("pckImgUrl").value
        ) {
            languageList[pos].added = true;
        }

        // To update all language packages when non-translation fields are edited in English
        if (languageList[pos].language === "en") {

            languageList.forEach(lang => {
                lang.fasting_start = fastingStartArr;
                lang.fasting_end = fastingEndArr;
                lang.fasting_hrs = fastingHrsArr;
                lang.type = document.getElementById("pckType").value;
                lang.eating_hrs = document.getElementById("pckEatingHrs").value;
                lang.gradient[0] = document.getElementById("pckGradient1").value;
                lang.gradient[1] = document.getElementById("pckGradient2").value;
                lang.weightloss = document.getElementById("pckWeightloss").value;
                lang.health = document.getElementById("pckHealth").value;
                lang.tags =  document.getElementById("pckTags").value.split(",");
            });

            languageList[pos].name = document.getElementById("pckName").value;
            languageList[pos].skip = document.getElementById("pckSkip").value;
            languageList[pos].description = document.getElementById("pckDesc").value;
            languageList[pos].img = document.getElementById("pckImgUrl").value;

        } else {
            languageList[pos].name = document.getElementById("pckName").value;
            languageList[pos].skip = document.getElementById("pckSkip").value;
            languageList[pos].fasting_start = fastingStartArr;
            languageList[pos].fasting_end = fastingEndArr;
            languageList[pos].fasting_hrs = fastingHrsArr;
            languageList[pos].type = document.getElementById("pckType").value;
            languageList[pos].eating_hrs = document.getElementById("pckEatingHrs").value;
            languageList[pos].description = document.getElementById("pckDesc").value;
            languageList[pos].img = document.getElementById("pckImgUrl").value;
            languageList[pos].gradient[0] = document.getElementById("pckGradient1").value;
            languageList[pos].gradient[1] = document.getElementById("pckGradient2").value;
            languageList[pos].weightloss = document.getElementById("pckWeightloss").value;
            languageList[pos].health = document.getElementById("pckHealth").value;
            languageList[pos].tags =  document.getElementById("pckTags").value.split(",");
        }

    } else {
        alert("Length mismatch in Fasting Start, End or Hrs. Should be same length. Please verify input.");
    }
}

// -------------------------------
// Use this cors proxy URL if required.

let corsProxy = 'https://cors-anywhere.herokuapp.com/';

// API URL

// let API_URL = "https://morning-hamlet-41477.herokuapp.com";
let API_URL = "http://localhost:8000";


// URL to redirect to login page

// let redirectUrl = "https://morning-hamlet-41477.herokuapp.com/client/logout.php";
let redirectUrl = "http://localhost:8000/client/logout.php";

// Read token and user value
let token = document.getElementById("accesstoken").value;
let userName = document.getElementById("username").value;
let userEmail = document.getElementById("useremail").value;

const invalidResponse = (disAlert = true) => {
    token = "";
    userName = "";
    userEmail = "";
    if (disAlert) {
        alert("Session timeout or invalid token. Please Login again.");
    }
    window.location.replace(redirectUrl);
}

// GET API call

async function getData(endpoint, dataType, render = false, disAlert = true, gpage = 1) {

    const getMethod = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token
        },
    }

    try {
        let response = await fetch(`${API_URL}/${endpoint}`, getMethod);
        let data = await response.json();
        let httpStatus = response.status;

        if (httpStatus !== 401) {

            if (dataType === "pck") {
                packageList = [];
                data.forEach(createPackageList);

                elements.container.innerHTML = '';
                renderPckPage(elements.container);
                renderPackages(packageList, gpage);
            } else if (dataType === "cat") {
                categoryList = [];
                data.forEach(createCategoryList);

                if (render) {
                    elements.container.innerHTML = '';
                    renderCatPage(elements.container);
                    renderCategory(categoryList, gpage);
                }
            } else {
                appList = [];
                data.forEach(createAppList);

                if (render) {
                    elements.container.innerHTML = '';
                    renderAppPage(elements.container);
                    renderApp(appList, gpage);
                }
            }
        } else {
            invalidResponse(disAlert);
        }
    } catch (err) {
        if (disAlert) {
            alert("Failed to retrieve data from server :(");
        }
        console.log(err);
    }
}

async function getLangData(endpoint, dataType = "pck", disAlert = true) {

    const getMethod = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token
        },
    }

    addLoader();

    try {
        let response = await fetch(`${API_URL}/${endpoint}`, getMethod);
        let data = await response.json();
        let httpStatus = response.status;

        data = JSON.parse(data);

        languageList = [];

        if (httpStatus !== 401) {

            if (dataType === "pck") {
                data.forEach(createPckLangList);
                
                elements.container.innerHTML = '';
                renderPckPage(elements.container);
                document.getElementById("search-box").disabled = true;
                document.getElementById("search-box").value = "";
                document.querySelector('.package-container').innerHTML = '';
                document.querySelector('.package-container').insertAdjacentHTML('beforeend', pckInputMarkup);
                document.querySelector('.card-body').insertAdjacentHTML('afterbegin', langList);

                const textMarkup = `<p class="last-updated">*You can edit as many languages you want and then press Submit button to save all of them together.</p>`;
                document.querySelector('.card-body').insertAdjacentHTML('beforeend', textMarkup);
                
                renderPackageEdit("en");
            } else  {
                data.forEach(createCatLangList);

                elements.container.innerHTML = '';
                renderCatPage(elements.container);
                document.getElementById("search-box").disabled = true;
                document.getElementById("search-box").value = "";
                document.querySelector('.category-container').innerHTML = '';
                document.querySelector('.category-container').insertAdjacentHTML('beforeend', catInputMarkup);
                document.querySelector('.card-body').insertAdjacentHTML('afterbegin', langList);

                const textMarkup = `<p class="last-updated">*You can edit as many languages you want and then press Submit button to save all of them together.</p>`;
                document.querySelector('.card-body').insertAdjacentHTML('beforeend', textMarkup);
                
                let el = document.getElementById("selectList");
                let sortable = Sortable.create(el);

                renderCategoryEdit("en", true);
            }
        } else {
            invalidResponse(disAlert);
        }
    } catch (err) {
        if (disAlert) {
            alert("Failed to retrieve data from server :(");
        }
        console.log(err);
    }
}

// POST API Call

async function postData(endpoint, dataType, content) {

    const postMethod = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token
        },
        body: JSON.stringify(content)
    }

    addLoader();

    try {
        let response = await fetch(`${API_URL}/${endpoint}`, postMethod);
        let data = await response.json();
        let httpStatus = response.status;

        if (httpStatus !== 401) {

            if (dataType === "pck") {
                getData(apiUrls.getAllPck, "pck", false, false, 1);
            } else if (dataType === "cat") {
                getData(apiUrls.getAllCat, "cat", true, false, 1);
            } else {
                getData(apiUrls.getAllApp, "app", true, false, 1);
            }

        } else {
            invalidResponse();
        }
    } catch (err) {
        console.log(err);
        alert("Failed to add. Please try again. :(");
        init();
    }
}

//  PUT API Call

async function putData(content, dataType, endpoint) {
    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token
        },
        body: JSON.stringify(content)
    }

    addLoader();

    try {
        let response = await fetch(`${API_URL}/${endpoint}`, putMethod);
        let data = await response.json();
        let httpStatus = response.status;

        if (httpStatus !== 401) {
            if (dataType === "pck") {
                getData(apiUrls.getAllPck, "pck", false, false, globalPage);
            } else if (dataType === "cat") {
                getData(apiUrls.getAllCat, "cat", true, false, globalPage);
            } else {
                getData(apiUrls.getAllApp, "app", true, false, globalPage);
            }
        } else {
            invalidResponse();
        }
    } catch (err) {
        console.log(err);
        alert("Failed to edit. Please try again. :(");
        init();
    }
}

// DELETE API Call

async function deleteData(id, endpoint, load = false) {

    const deleteMethod = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token
        },
    }

    try {
        let response = fetch(`${API_URL}/${endpoint}/${id}`, deleteMethod);
        let httpStatus = await response.status;

        if (httpStatus !== 401) {
            if (load) {
                getData(apiUrls.getAllCat, "cat", false);
                getData(apiUrls.getAllApp, "app", false);
            }
        } else {
            invalidResponse();
        }
    } catch (err) {
        console.log(err);
        alert("Failed to delete. Please try again. :(");
        init();
    }
}


// Function to verify user after login
async function userVerify(endpoint) {

    addLoader();

    const getUserMethod = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'token': token,
            'username': userName,
            'useremail': userEmail
        },
    }

    try {
        let response = await fetch(`${API_URL}/${endpoint}`, getUserMethod);
        let httpStatus = response.status;

        if (httpStatus === 200) {
            init();
        }
        if (httpStatus === 401) {
            alert("Sorry. Your User Authentication is pending approval. Please try again later.");
            invalidResponse(false);
        }

    } catch (err) {
        invalidResponse();
        console.log(err);
    }
}

// Function to initialize, and read Data from server

const init = () => {
    addLoader();
    getData(apiUrls.getAllPck, "pck", false, true);
    getData(apiUrls.getAllCat, "cat", false, false);
    getData(apiUrls.getAllApp, "app", false, false);
}

userVerify(apiUrls.getUser);

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

elements.homePg.addEventListener('click', () => init());