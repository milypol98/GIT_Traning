<%--
  Created by IntelliJ IDEA.
  User: milypol
  Date: 30.11.2022
  Time: 12:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
<div id="icd9"></div>
</div>
<table class="codesIcd9">

</table>
<script src="../../resources/js/takeIcd9.js"></script>
<script src="../../resources/js/search.js"></script>
</body>
</html>
