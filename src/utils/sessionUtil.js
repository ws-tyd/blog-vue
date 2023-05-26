const setSession = (key, value) => {
    window.sessionStorage.setItem(key, value)
    localStorage.setItem(key, value)
}

const removeSessionItem = (key) => {
    if (sessionStorage.getItem(key) !== null || sessionStorage.getItem(key) !== 'undefine') {
        sessionStorage.removeItem(key)
    }
    if (localStorage.getItem(key) !== null || localStorage.getItem(key) !== 'undefine') {
        localStorage.removeItem(key)
    }

}

const clearSession = () => {
    localStorage.clear()
    sessionStorage.clear()
}

const getSession = (key) => {
    return localStorage.getItem(key) || sessionStorage.getItem(key)
}
/*
*
* const setItem = (key,value,module_name) =>{
    if (module_name){
        let val = this.getItem(module_name);
        val[key] = value;
        this.setItem(module_name, val);
    }else{
        let val = this.getStorage();
        val[key] = value;
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
},
// 获取某一个模块下面的属性user下面的userName
const getItem = (key,module_name) => {
    if (module_name){
        let val = this.getItem(module_name);
        if(val) return val[key];
    }
    return this.getStorage()[key];
},
const getStorage = () => {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
},
const clear = (key, module_name)=>{
    let val = this.getStorage();
    if (module_name){
        if (!val[module_name])return;
        delete val[module_name][key];
    }else{
        delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
}
* **/
export {
    setSession,
    removeSessionItem,
    clearSession,
    getSession
}
