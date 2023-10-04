<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/base.Master" CodeBehind="CadFuncionario.aspx.vb" Inherits="vendas.CadFuncionario" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<%--  --%>
    <div class="form">
        <table>
        <tr>
            <td>
                <label>Nome: </label>
            </td>
            <td>
                <asp:TextBox ID="txtNome" runat="server" CssClass="input"></asp:TextBox>
            </td>
            <td>
                 <asp:RequiredFieldValidator runat="server" ControlToValidate="txtNome" ErrorMessage="Nome é Obrigatório" ID="rfvName" CssClass="box-error"/>
            </td>
        </tr>
         <tr>
            <td>
                <label>E-mail: </label>
            </td>
            <td>
                <asp:TextBox ID="txtEmail" runat="server" CssClass="input"></asp:TextBox>
            </td>
             <td>
                <asp:RequiredFieldValidator runat="server" ControlToValidate="txtEmail" ErrorMessage="E-mail é Obrigatório" ID="rfvEmail" CssClass="box-error"/>
                <asp:RegularExpressionValidator runat="server" ControlToValidate="txtEmail" ErrorMessage="Valide seu E-mail" ID="revEmail" ValidationExpression="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" CssClass="box-error"/>
            </td>
        </tr>
         <tr>
            <td>
                <label>Porcentagem de Desconto: </label>
            </td>
            <td>
                <asp:TextBox ID="txtPorcentagem" runat="server" CssClass="input"></asp:TextBox>
            </td>
             <td>
                <asp:RequiredFieldValidator runat="server" ControlToValidate="txtPorcentagem" ErrorMessage="Porgentagem é Obrigatório" ID="rfvPorcentagem" CssClass="box-error"/>
            </td>
        </tr>
        <tr>
            <td colspan="2"><asp:Button ID="btnSubmit" runat="server" Text="Enviar" CssClass="btn-classic" OnClick="btnSubmit_Click"/></td>
        </tr>
    </table>
    </div>
</asp:Content>
