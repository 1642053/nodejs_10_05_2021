// gọi class source
const source = require('./Source');
const kq = new source();

// Tên folder gốc
var folder_root = 'BTVN';

kq.create_folders( folder_root );

// Danh sách folders và files
var jsons =[
{
    'name' : 'folders',
    'lists':
    [
        {
            'name': 'controllers',
            'childs': '',
            'files':
            [
                { 'name': 'a1.txt', 'content': 'a1' },
                { 'name': 'b1.txt', 'content': 'b1' }
            ]
        },
        {
            'name': 'models',
            'childs': '',
            'files': ''
        },
        {
            'name': 'views',
            'childs':
            [
                {
                    'name': 'categories',
                    'childs': '',
                    'files':
                    [
                        { 'name': 'a2.txt', 'content': 'a2' },
                        { 'name': 'b2.txt', 'content': 'b2' }
                    ]
                },
                {
                    'name': 'products',
                    'childs': '',
                    'files': ''
                },
                {
                    'name': 'posts',
                    'childs': '',
                    'files': ''
                }
            ],
            'files':
            [
                { 'name': 'a1.txt', 'content': 'a1' },
                { 'name': 'b1.txt', 'content': 'b1' }
            ]
        }
    ]
},
{
    'name': 'files',
    'lists':
    [
        { 'name': 'a.txt', 'content': 'a' },
        { 'name': 'b.txt', 'content': 'b' }
    ]
}];

kq.create_folders_files( jsons, folder_root );