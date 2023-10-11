Imports System.Data.SqlClient
Imports ProjetoModel

Public Class cadastroFuncionario
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not IsPostBack Then
            ' Carregue e exiba a lista de funcionários no primeiro carregamento da página
            carregaFuncionarios()
        End If
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

                carregaFuncionarios()

                txtNome.Text = ""
                txtEmail.Text = ""
                txtPorcentagem.Text = ""

                Response.Write("<script>alert('Funcionario Cadastrado com sucesso!!!');</script>")
            Else
                Throw New Exception("Erro!!! Algum dado está vazio.")
            End If
        Catch ex As Exception
            Response.Write("<script>window.alert('" & ex.Message & "')</script>")
        End Try
    End Sub

    Protected Sub gvFuncionarios_SelectedIndexChanged(sender As Object, e As EventArgs) Handles gvFuncionarios.SelectedIndexChanged
    End Sub

    Private Sub carregaFuncionarios()
        Dim listaFuncionarios As List(Of FuncionarioDTO) = New List(Of FuncionarioDTO)()


        Dim rootWebConfig As System.Configuration.Configuration = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("/")
        Dim connString As System.Configuration.ConnectionStringSettings
        connString = rootWebConfig.ConnectionStrings.ConnectionStrings("VendasConnectionString")

        Dim con As SqlConnection = New SqlConnection()
        con.ConnectionString = connString.ToString()
        Dim cmd As SqlCommand = New SqlCommand()
        cmd.Connection = con
        System.Diagnostics.Debug.Write("chegou")
        cmd.CommandText = "select * from funcionarios"
        con.Open()

        Dim reader As SqlDataReader = cmd.ExecuteReader()
        ' Leia os resultados e adicione-os à lista como DTOs
        While reader.Read()
            Dim funcionario As New FuncionarioDTO()
            funcionario.Id = Convert.ToInt32(reader("id"))
            funcionario.Nome = Convert.ToString(reader("nome"))
            funcionario.PorcentagemDesconto = Convert.ToInt32(reader("porcentagem"))
            funcionario.Email = Convert.ToString(reader("email"))
            System.Diagnostics.Debug.WriteLine(funcionario.Nome)
            listaFuncionarios.Add(funcionario)
        End While

        ' Feche o leitor e a conexão
        reader.Close()
        con.Close()

        gvFuncionarios.DataSource = listaFuncionarios
        gvFuncionarios.DataBind()
    End Sub

    Protected Sub gvFuncionarios_RowCommand(sender As Object, e As GridViewCommandEventArgs)
        If e.CommandName = "Atualizar" Then
            ' Lógica para atualizar o item associado ao botão
            Dim id As String = e.CommandArgument.ToString()
            ' Implemente a lógica de atualização com base no ID recebido
        ElseIf e.CommandName = "Excluir" Then
            ' Lógica para excluir o item associado ao botão
            Dim id As String = e.CommandArgument.ToString()
            ' Implemente a lógica de exclusão com base no ID recebido
        End If
    End Sub


End Class