<%--
  Created by IntelliJ IDEA.
  User: milypol
  Date: 30.11.2022
  Time: 13:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<table class="codesIcd9">
<c:forEach items="${searchicd9}" var="icd9">
    <tr>
        <td id ="code">${icd9.kod}</td>
        <td id ="description">${icd9.opis}</td>
        <td><button id="addIcd9" value="${icd9.kod}${icd9.opis}">Dodaj +</button> </td>
    </tr>
</c:forEach>
</table>
<button id="mainPage">
    Strona gowna
</button>

<script src="../../resources/js/giveIcd9.js"></script>
<script src="../../resources/js/mainPageButton.js"></script>
</body>
</html>
