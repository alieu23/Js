module.exports = {
    devServer:{
        proxy:{
            '^/api':{
                target:'http://localhost:5000',
                changeORigin:true,
                logLevel:'debug',
                pathRewrite:{'^/api': '/'}

            },
        }
    }
}