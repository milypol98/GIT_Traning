<%--
  Created by IntelliJ IDEA.
  User: milypol
  Date: 22.11.2022
  Time: 21:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %><html>
<html>
<head>
    <title>Title</title>
</head>
<body>
<hi>Działa</hi>

    <input type="text" id="search-input" placeholder="Szukaj..." >

<a id="search">Szukaj</a>
<a href = "<c:url value="icd9Table"/>">ICD9</a>
<script src="../../resources/js/search.js"></script>
</body>
</html>
