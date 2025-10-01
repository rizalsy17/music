<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class SpotifyController extends Controller
{
    private function getAccessToken()
    {
        $clientId = env('SPOTIFY_CLIENT_ID');
        $clientSecret = env('SPOTIFY_CLIENT_SECRET');

        $tokenResponse = Http::asForm()
            ->withBasicAuth($clientId, $clientSecret)
            ->post('https://accounts.spotify.com/api/token', [
                'grant_type' => 'client_credentials',
            ]);

        return $tokenResponse['access_token'];
    }

    public function getProfile($userId)
    {
        $accessToken = $this->getAccessToken();

        $response = Http::withToken($accessToken)
            ->get("https://api.spotify.com/v1/users/{$userId}");

        return $response->json();
    }

    public function getPlaylists($userId)
    {
        $accessToken = $this->getAccessToken();

        $response = Http::withToken($accessToken)
            ->get("https://api.spotify.com/v1/users/{$userId}/playlists");

        return $response->json();
    }
}
