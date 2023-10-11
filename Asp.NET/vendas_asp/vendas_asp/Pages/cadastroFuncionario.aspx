<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Site.Master"
    CodeBehind="cadastroFuncionario.aspx.vb" Inherits="vendas_asp.cadastroFuncionario" %>
    <asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
        <div class="form">

            <table>
                <tr>
                    <td>
                        <label>Nome: </label>
                    </td>
                    <td>
                        <asp:TextBox ID="txtNome" runat="server" CssClass="input"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:RequiredFieldValidator runat="server" ControlToValidate="txtNome"
                            ErrorMessage="Nome é Obrigatório" ID="rfvName" CssClass="box-error" Display="Dynamic" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>E-mail: </label>
                    </td>
                    <td>
                        <asp:TextBox ID="txtEmail" runat="server" CssClass="input"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:RequiredFieldValidator runat="server" ControlToValidate="txtEmail"
                            ErrorMessage="E-mail é Obrigatório" ID="rfvEmail" CssClass="box-error" Display="Dynamic" />
                        <asp:RegularExpressionValidator runat="server" ControlToValidate="txtEmail"
                            ErrorMessage="Valide seu E-mail" ID="revEmail"
                            ValidationExpression="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" CssClass="box-error"
                            Display="Dynamic" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Porcentagem de Desconto: </label>
                    </td>
                    <td>
                        <asp:TextBox ID="txtPorcentagem" runat="server" CssClass="input"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:RequiredFieldValidator runat="server" ControlToValidate="txtPorcentagem"
                            ErrorMessage="Porcentagem é Obrigatório" ID="rfvPorcentagem" CssClass="box-error"
                            Display="Dynamic" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Button ID="btnSubmit" runat="server" Text="Enviar" CssClass="btn-classic"
                            OnClick="btnSubmit_Click" />
                    </td>
                </tr>

            </table>
        </div>

        <asp:GridView ID="gvFuncionarios" runat="server" AutoGenerateColumns="False" CssClass="grid">
    <Columns>
        <asp:TemplateField>
            <HeaderTemplate>
                <div class="th-custom">
                    ID
                </div>
            </HeaderTemplate>
            <ItemTemplate >
                <div class="td-custom">
                    <%#Eval("Id") %>
                </div>
            </ItemTemplate>
        </asp:TemplateField>

        <asp:TemplateField>
            <HeaderTemplate>
                <div class="th-custom">
                    Nome
                </div>
            </HeaderTemplate>
            <ItemTemplate>
                <div class="td-custom">
                    <%#Eval("Nome") %>
                </div>
            </ItemTemplate>
        </asp:TemplateField>
        <asp:TemplateField>
            <HeaderTemplate>
                <div class="th-custom">
                    E-mail
                </div>
            </HeaderTemplate>
            <ItemTemplate>
                <div class="td-custom">
                    <%#Eval("Email") %>
                </div>
            </ItemTemplate>
        </asp:TemplateField>
        <asp:TemplateField>
            <HeaderTemplate>
                <div class="th-custom">
                    Porcentagem
                </div>
            </HeaderTemplate>
            <ItemTemplate>
                <div class="td-custom">
                    <%#Eval("PorcentagemDesconto") %>
                </div>
            </ItemTemplate>
        </asp:TemplateField>
        <asp:TemplateField>
            <HeaderTemplate>
                Ações
            </HeaderTemplate>
            <ItemTemplate>
                <div class="td-custom">
                    <asp:Button ID="btnAtualizar" runat="server" CssClass="btn-classic" Text="Alterar" CommandName="Atualizar" CommandArgument='<%#Eval("Id") %>' />
                    <asp:Button ID="btnExcluir" CssClass="btn-classic" Text="Excluir" CommandName="Excluir" CommandArgument='<%#Eval("Id") %>' runat="server"/>
                </div>
            </ItemTemplate>
        </asp:TemplateField>
    </Columns>
</asp:GridView>

    </asp:Content>


