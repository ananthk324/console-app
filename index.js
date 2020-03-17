// View

const elements = {

};

// Model

let categoryList = [],
    packageList = [],
    appList = [];

const addApp = (appInput) => {
    const app = {
        appId: appList.length > 0 ? appList[appList.length - 1].appId + 1 : 1,
        name: appInput.name
    }

    appList.push(app);
}

const addCategory = (categoryInput) => {
    const category = {
        catId: categoryList.length > 0 ? categoryList[categoryList.length - 1].catId + 1 : 1,
        app: categoryInput.app,
        name: categoryInput.name,
        img: categoryInput.img
    }

    categoryList.push(category);
}

const addPackage = (packageInput) => {
    const package = {
        pckId: packageList.length > 0 ? packageList[packageList.length - 1].pckId + 1 : 1,
        cat: packageInput.cat,
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

    packageList.push(package);
}

const deleteApp = (id) => {
    appList = appList.filter(apps => apps.appId !== id);
}

const deleteCategory = (id) => {
    categoryList = categoryList.filter(categorys => categorys.catId !== id);
}

const deletePackage = (id) => {
    packageList = packageList.filter(packages => packages.pckId !== id);
}

// Controller