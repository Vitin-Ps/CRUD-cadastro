
Partial Class pages_Default
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load

    End Sub

    Protected Sub btnSalvar_Click(sender As Object, e As EventArgs)
        clsFuncionario.InserirFuncionario(txtNome.Text, txtEmail.Text)
        lblResp.Text = "Funcionario Cadastrado com " & "Sucesso"
        lblResp.Visible = True
    End Sub
End Class
