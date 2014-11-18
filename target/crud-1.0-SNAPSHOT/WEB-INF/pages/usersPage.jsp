<%--
  Created by IntelliJ IDEA.
  User: Dread
  Date: 17/11/2014
  Time: 10:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="utf8" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>

<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" media="screen" href='<c:url value="../resources/css/bootstrap.min.css"/>'/>
    <link rel="stylesheet" type="text/css" media="screen" href='<c:url value="../resources/css/style.css"/>'/>

    <script type='text/javascript' src='<c:url value="../resources/js/jquery-2.1.1.min.js"/>'></script>
    <script type='text/javascript' src='<c:url value="../resources/js/bootstrap.min.js"/>'></script>
    <script type='text/javascript' src='<c:url value="../resources/js/users.js"/>'></script>
</head>
<body>

<table class="table table-bordered">
    <table class="table table-bordered table-striped" id="units">
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>E_mail</th>
            <th>Role</th>
            <th>Blogs</th>
            <th>Password</th>
        </tr>
        </thead>
        <tbody id="listUsers"></tbody>
    </table>
</table>
</body>
</html>
