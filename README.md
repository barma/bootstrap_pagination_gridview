# bootstrap_pagination_gridview

Add in tag asp:GridView two lines for the setting pagination, and include js and css files in the page
```asp.net
<asp:GridView ...>
     ...
     <PagerSettings FirstPageText="&amp;lt;&amp;lt;" LastPageText="&amp;gt;&amp;gt;" Mode="NumericFirstLast" />
     <PagerStyle HorizontalAlign="Right" CssClass="pagination-bs" />
</asp:GridView>
