<%--
  Created by IntelliJ IDEA.
  User: milypol
  Date: 28.11.2022
  Time: 10:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<table>
    <h2>Szukajka</h2>

    <c:forEach items="${seaarchIcd9}" var="icd9">
    <tr>
        <td>${icd9.kod}</td><
        <td>${icd9.opis}</td>
        <td>${icd9.zakres}</td>
    </tr>
    </c:forEach>
</body>
</html>
