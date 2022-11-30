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
        <td>${icd9.kod}</td>
        <td>${icd9.opis}</td>
        <td>${icd9.zakres}</td>
        <td><button id="addIcd9">wstaw</button> </td>
    </tr>
</c:forEach>
</table>
</body>
</html>
