webpackJsonp([26379419371658],{226:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),u=l(r),n=a(6),d=l(n),f=a(25),i=l(f),o=function(e){var t=e.pathContext,a=e.data,l=(t.tag,a.allMarkdownRemark.edges);return u.default.createElement("div",null,u.default.createElement("ul",null,l.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return u.default.createElement("div",{className:"blog-post-preview",key:t.id},u.default.createElement("h1",null,u.default.createElement(i.default,{to:t.frontmatter.path},t.frontmatter.title)),u.default.createElement("h2",null,t.frontmatter.date),u.default.createElement("p",null,t.excerpt))})))};o.propTypes={pathContext:d.default.shape({tag:d.default.string.isRequired}),data:d.default.shape({allMarkdownRemark:d.default.shape({totalCount:d.default.number.isRequired,edges:d.default.arrayOf(d.default.shape({node:d.default.shape({frontmatter:d.default.shape({path:d.default.string.isRequired,title:d.default.string.isRequired})})}).isRequired)})})},t.default=o;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-categories-js-5a48f964388ef4b8d15e.js.map