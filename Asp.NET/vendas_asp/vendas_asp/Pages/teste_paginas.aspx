<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Site.Master" CodeBehind="teste_paginas.aspx.vb" Inherits="vendas_asp.teste_paginas" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="id" DataSourceID="dataVendas">
        <Columns>
            <asp:CommandField ShowDeleteButton="True" />
            <asp:BoundField DataField="id" HeaderText="id" InsertVisible="False" ReadOnly="True" SortExpression="id" />
            <asp:BoundField DataField="nome" HeaderText="nome" SortExpression="nome" />
            <asp:BoundField DataField="email" HeaderText="email" SortExpression="email" />
            <asp:BoundField DataField="porcentagem" HeaderText="porcentagem" SortExpression="porcentagem" />
        </Columns>
    </asp:GridView>
    <asp:SqlDataSource ID="dataVendas" runat="server" ConnectionString="<%$ ConnectionStrings:VendasConnectionString %>" DeleteCommand="DELETE FROM [funcionarios] WHERE [id] = @id" InsertCommand="INSERT INTO [funcionarios] ([nome], [email], [porcentagem]) VALUES (@nome, @email, @porcentagem)" SelectCommand="SELECT [id], [nome], [email], [porcentagem] FROM [funcionarios]" UpdateCommand="UPDATE [funcionarios] SET [nome] = @nome, [email] = @email, [porcentagem] = @porcentagem WHERE [id] = @id">
        <DeleteParameters>
            <asp:Parameter Name="id" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="nome" Type="String" />
            <asp:Parameter Name="email" Type="String" />
            <asp:Parameter Name="porcentagem" Type="Int32" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="nome" Type="String" />
            <asp:Parameter Name="email" Type="String" />
            <asp:Parameter Name="porcentagem" Type="Int32" />
            <asp:Parameter Name="id" Type="Int32" />
        </UpdateParameters>
    </asp:SqlDataSource>
    <br>
</asp:Content>
