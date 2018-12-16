import Vue from 'vue'
function getQueryString(name, url) {
    var str = url || document.location.search || document.location.hash,
        result = null;

    if (!name || str === '') {
        return result;
    }

    result = str.match(
        new RegExp('(^|&|[\?#])' + name + '=([^&]*)(&|$)')
    );

    return result === null ? result : decodeURIComponent(result[2]);
}
Vue.prototype.getQueryString = getQueryString;
export default new Vue()