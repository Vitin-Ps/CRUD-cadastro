Imports System.Data.SqlClient

Public Class CadFuncionario
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub btnSubmit_Click(sender As Object, e As EventArgs) Handles btnSubmit.Click

        Try
            If txtNome.Text <> "" AndAlso txtEmail.Text <> "" AndAlso txtPorcentagem.Text <> "" Then
                ' Se as caixas de texto não estão vazias
                Dim rootWebConfig As System.Configuration.Configuration = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("/")
                Dim connString As System.Configuration.ConnectionStringSettings
                connString = rootWebConfig.ConnectionStrings.ConnectionStrings("VendasConnectionString")

                Dim con As SqlConnection = New SqlConnection()
                con.ConnectionString = connString.ToString()
                Dim cmd As SqlCommand = New SqlCommand()
                cmd.Connection = con

                cmd.CommandText = "Insert into funcionarios (nome, email, porcentagem) values (@nome, @email, @porcentagem)"
                cmd.Parameters.AddWithValue("@nome", txtNome.Text)
                cmd.Parameters.AddWithValue("@email", txtEmail.Text)
                cmd.Parameters.AddWithValue("@porcentagem", txtPorcentagem.Text)

                con.Open()
                cmd.ExecuteNonQuery()
                con.Close()

                Response.Write("<script>alert('Funcionario Cadastrado com sucesso!!!');</script>")
            Else
                Throw New Exception("Erro!!! Algum dado está vazio.")
            End If
        Catch ex As Exception
            Response.Write("<script>window.alert('" & ex.Message & "')</script>")
        End Try

    End Sub
End Class