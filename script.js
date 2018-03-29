let categories = ["analytics-automation", "ar", "cin", "ciscoit", "cle", "cloud", "collaboration", "csr", "customerstories",
    "datacenter", "developer", "digital", "digital-joulex", "diversity", "education", "energy", "enterprise", "financialservices",
    "getyourbuildon", "gov", "government", "healthcare", "innovation", "lifeatcisco", "manufacturing", "news", "openatcisco",
    "partner", "performance", "perspectives", "retail", "security", "security-talos", "services", "smallbusiness", "socialmedia",
    "sp", "video", "wireless", "zzfeatured"];

categories = categories.map(name => ({name, open: false, files: null}));

new Vue({
    el: '#app',
    data: {
        categories,
        selected: null
    },
    methods: {
        open(category){
            if(category.files !== null){
                category.open = !category.open;
                return;
            }

            this.$http.get(`map/${category.name}.json`).then(function(response){
                category.files = response.body;
                category.open = !category.open;
            }, function(response){
                console.log('ERROR!');
            })
        },
        path(category, fileName){
            return `${category.name}/${fileName}`;
        },
        select(category, fileName){
            this.selected = this.path(category, fileName);
        }
    }
})