<%@ Page Title="" Language="VB" MasterPageFile="~/pag_principal.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="pages_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h1>Cad Func</h1>
    <div>
        <label>Nome: </label>
        <asp:TextBox runat="server" ID="txtNome" />
    </div>
    <div>
        <label>Email: </label>
        <asp:TextBox runat="server" ID="txtEmail" />
    </div>
    <asp:Button runat="server" ID="btnSalvar" Text="Salvar" OnClick="btnSalvar_Click"/>
    <asp:Label runat="server" ID="lblResp" Visible="false"/>
</asp:Content>

