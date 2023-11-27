Imports System.Data.SqlClient
Imports Microsoft.VisualBasic

Public Class codigos
    Public Shared Function CriarConexao() As SqlConnection
        Dim resp As SqlConnection = Nothing
        Dim strConect As New String(ConfigurationManager.ConnectionStrings("FuncionariosConnection").ConnectionString)
        Try
            resp = New SqlConnection(strConect)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
        Return resp
    End Function
End Class
