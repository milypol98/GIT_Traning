<%--
  Created by IntelliJ IDEA.
  User: milypol
  Date: 30.11.2022
  Time: 12:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<div class="searchBox">
    <input
            id="search-input"
            placeholder="Szukaj..."
    />
    <button id="search">🔎</button>
    <button id="icd9Table"> ICD9</button>
<br/>
    <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Badania">

</textarea>
</div>
<table class="codesIcd9">

</table>
<script src="../../resources/js/search.js"></script>
</body>
</html>
