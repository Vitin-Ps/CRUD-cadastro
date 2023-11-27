Imports System.Data
Imports System.Data.SqlClient
Imports Microsoft.VisualBasic

Public Class clsFuncionario

    Public Shared Function CriarConexao() As SqlConnection
        Dim strConect As String = ConfigurationManager.ConnectionStrings("FuncionariosConnection").ConnectionString
        Return New SqlConnection(strConect)
    End Function

    Public Shared Sub InserirFuncionario(nome As String, email As String)
        Dim cnn As SqlConnection = Nothing
        Dim cmd As SqlCommand = Nothing
        Try
            cnn = CriarConexao()
            cnn.Open()
            Dim sql As String = "insert into funcionario (nome, email) values ('" & nome & "', '" & email & "');"
            cmd = New SqlCommand(sql, cnn)
            'cmd.Parameters.AddWithValue("@nome", nome)
            'cmd.Parameters.AddWithValue("@email", email)
            cmd.ExecuteNonQuery()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        Finally
            If cnn.State = ConnectionState.Open Then
                cnn.Close()
            End If
        End Try
    End Sub
End Class
