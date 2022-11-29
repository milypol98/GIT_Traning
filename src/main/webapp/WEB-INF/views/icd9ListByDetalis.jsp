<%--
  Created by IntelliJ IDEA.
  User: milypol
  Date: 23.11.2022
  Time: 15:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
<input type="text" placeholder="Szukaj..." id="speed-search">
<table>
  <c:forEach items="${listByDetalis}" var="icd9">
    <tr>
      <td>${icd9.kod}</td>
      <td>${icd9.opis}</td>
      <td>${icd9.zakres}</td>
      <td><a href="<c:url value="/icd9Detalis?code=${icd9.kod}"/> ">Wiecej</a> </td>
      <td><button id="addButton">Wstaw</button></td>
    </tr>
  </c:forEach>
</table>
<script src="../../resources/js/button.js"></script>

</body>
</html>
