var fs = require('fs');

class Source
{
    create_folders_files(json=[], path='')
    {
        json
        .forEach(e=>{
            // folders cấp 1
            if(e.name == 'folders'){
                if(e.lists != ''){
                    e.lists
                    .forEach(f=>{
                        // folders và files cấp 2
                        if(f.name != ''){
                            this.create_folders( path + '/' + f.name );
                            if(f.files != ''){
                                f.files
                                .forEach(g=>{
                                    var path_cap_2 = path + '/' + f.name + '/' + g.name;
                                    this.create_files( path_cap_2, g.content );
                                });
                            }
                            // folders và files cấp 3
                            if(f.childs != ''){
                                f.childs
                                .forEach(g=>{
                                    this.create_folders( path + '/' + f.name + '/' + g.name );
                                    if(g.files != ''){
                                        g.files
                                        .forEach(h=>{
                                            var path_cap_3 = path + '/' + f.name + '/' + g.name + '/' + h.name;
                                            this.create_files( path_cap_3, h.content );
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
            // files cấp 1
            if(e.name == 'files'){
                if(e.lists != ''){
                    e.lists.forEach(f=>{
                        this.create_files( path + '/' + f.name, f.content );
                    });
                }
            }
        });
    }

    create_folders(path='')
    {
        return (!fs.existsSync(path)) ? fs.mkdirSync(path) : '';
    }

    create_files(path='', content='')
    {
        return (!fs.existsSync(path)) ? fs.writeFile(path, content, function(err){ if(err) throw err; }) : '';
    }
}

module.exports = Source;