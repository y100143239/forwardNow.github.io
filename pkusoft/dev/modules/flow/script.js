define(["dot/doT.min", "utils/utils"], function(dot, utils) {

    var flow = {
        data: "",
        container: null,
        headings: [/*{colId:"",colName:""}*/],
        init: function (options) {
            utils.extend( this, options );
            this.getHeadings();
            this.render();
            return this;
        },
        render: function() {
            var html;
            html = this.translateTemplate();
            this.container.innerHTML = html;
            return this;
        },
        getHeadings: function () {
            var headingElts,
                i,
                len,
                colId,
                colName,
                headings;
            headings = this.headings;
            headingElts = this.container.getElementsByTagName("span");
            for ( i = 0, len = headingElts.length; i < len; i++ ) {
                colId = headingElts[i].getAttribute("colId");
                colName = headingElts[i].innerHTML;
                headings.push({colId:colId, colName:colName});
            }
            return headings;
        },
        getData: function() {
            var headings,
                _data,
                nodes,
                title,
                titleId,
                data
                ;
            data = {};
            headings = this.headings;
            titleId = headings[0 ].colId;
            nodes = [];
            _data = {"array":nodes };
            utils.each(this.data, function(index, d){
                title = d[titleId];
                for ( var i = 1, len = headings.length; i < len; i++ ) {
                    var colId = headings[i ].colId;
                    var colName = headings[i ].colName;
                    data[colName] = d[colId] || "";
                }
                nodes.push({title:title,data: data});
            });
            return _data;
        },
        translateTemplate: function() {
            var html,
                temp,
                data
                ;
            temp = this.template.node;
            data = this.getData();
            html = dot.template( temp )( data );
            return html;
        }

    };




    flow.template = {};
    flow.template.container = '<div class="flow-container">${_data}</div>';
    flow.template.node = '{{~it.array:value:index}}\
<div class="flow-node \
{{? index === 0 }}flow-node-start {{?}}\
{{? index % 3 === 2 && index !== it.array.length - 1 }}flow-corner {{?}}\
{{? index === it.array.length - 1 }}flow-node-end {{?}}\
{{? index % 6 === 3 || index % 6 === 4 || index % 6 === 5  }}flow-node-left {{?}}\
">\
    <div class="line"><b class="line-anchor"></b><b class="line-anchor-end"></b> </div>\
    <div class="desc mod">\
        <b class="left-top"></b> <b class="right-top"></b> <b class="left-bottom"></b> <b class="right-bottom"></b>\
        <div class="desc-body">\
            <h3 class="desc-heading">{{= value.title }}</h3>\
            <div class="desc-cont">\
            <table>\
            {{ for(var prop in value.data ) { }}\
            <tr> <td><b>：</b>{{= prop }}</td> <td>{{= value.data[prop] }}</td> </tr>\
            {{ } }}\
            </table>\
            </div>\
        </div>\
    </div>\
</div>\
{{~}}\
<div class="clearfix"></div>\
    ';



    return flow;
});

