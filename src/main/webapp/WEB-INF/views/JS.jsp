<%--
  Created by IntelliJ IDEA.
  User: milypol
  Date: 29.11.2022
  Time: 20:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
<main>

    <table class="codesIcd9">
        <c:forEach items="${icd9Table}" var="icd9">
            <tr class="pokemonInfos">
                <td id="code">${icd9.kod}</td>
                <td id="description">${icd9.opis}</td>
                <td id="nextButton"><button id="next"  value="${icd9.kod}">Wiecej →</button> </td>
            </tr>
        </c:forEach>
    </table>
</main>
<br/>
<button id = "mainPage">
    Strona gowna
</button>

<script src="../../resources/js/mainPageButton.js"></script>
<script src="../../resources/js/script.js"></script>
</body>
</html>
